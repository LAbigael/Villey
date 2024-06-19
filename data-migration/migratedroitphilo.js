const cheerio = require("cheerio");
const slugify = require("slugify");
const { uid } = require("uid");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { DOMParser } = require("prosemirror-model");
const pmSchema = require("prosemirror-schema-basic");

const dp_old = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "password",
    database: "droitphilosophie_old",
  },
});
const dp_new = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "password",
    database: "juspoliticum_new",
  },
});

const idMapping = {
  author: {},
  volume: {},
  chapter: {},
  article: {},
  recension: {},
};

function getFootnotesContentFromHtml(html) {
  const $ = cheerio.load(html);
  const footnotes = [];
  // TODO : handle two footnotes with id footnote-1250-1
  $("div").each(function (i, elem) {
    try {
      if ($(elem).attr("id")) {
        const footnote = {
          position: $(elem).attr("id").replace("ftn", ""),
          content: $(elem)
            .text()
            .replace(/\[\d+\]\./g, "")
            .trim(),
          uid: uid(),
        };
        footnotes.push(footnote);
      }
      if ($(elem).attr("class") === "footnote") {
        const footnote = {
          position: $(elem).find("a.footnote-anchor").text(),
          content: $(elem).children("p").text().replace(/\d+\./g, "").trim(),
          uid: uid(),
        };
        footnotes.push(footnote);
      }
    } catch (e) {
      console.log(e);
    }
  });
  return footnotes;
}

// <div id="ftn1" style="mso-element: footnote;">
// <p class="JPNdBP"><a style="mso-footnote-id: ftn1;" title="" href="#_ftnref1" name="_ftn1"><span class="MsoFootnoteReference">*</span></a> Je tiens sinc&egrave;rement &agrave; remercier Madame &Eacute;lodie Djordjevic, Monsieur le professeur Denis Baranger et Monsieur Federico Colli pour leur confiance, pour leurs aimables relectures et leurs conseils avis&eacute;s sur ce texte.</p>
// </div>

function htmlToProsemirror(html, footnotes = []) {
  const $ = cheerio.load(html);
  $(".JP_citation").replaceWith(function () {
    return `<blockquote>${$(this).html()}</blockquote>`;
  });

  const { document } = new JSDOM(html).window;
  const parsedHTML = DOMParser.fromSchema(pmSchema.schema)
    .parse(document, { preserveWhitespace: true })
    .toJSON();
  const prosemirrorJson = modifyJsonToMatchTiptapSchema(
    JSON.stringify(parsedHTML),
    footnotes
  );
  return prosemirrorJson;
}

const modifyJsonToMatchTiptapSchema = (json, footnotes = []) => {
  const jsonParsed = JSON.parse(json);

  const replaceWithTiptapMarks = (node) => {
    if (node.marks) {
      node.marks.forEach((mark) => {
        if (footnotes.length > 0) {
          if (mark.type === "link" && mark.attrs.href) {
            replaceLinkithFootnote();
          }
        }
        if (mark.type === "em") {
          mark.type = "italic";
        } else if (mark.type === "strong") {
          mark.type = "bold";
        }

        function replaceLinkithFootnote() {
          // extract footnote number from href (ex: #_ftn1 or #footnote-1250-1)
          const footnoteNumber = mark.attrs.href.match(/(\d+)$/)?.[1];
          if (!footnoteNumber) {
            // normal link
            return;
          }

          const footnote = footnotes.find((f) => f.position === footnoteNumber);
          if (footnote) {
            mark.type = "footnote";
            mark.attrs = { id: footnote.uid };
          }
        }
      });
    }

    if (node.content) {
      node.content.forEach((child) => replaceWithTiptapMarks(child));
    }
  };

  jsonParsed.content.forEach((node) => replaceWithTiptapMarks(node));

  return JSON.stringify(jsonParsed);
};

const migrateArticles = async (fetchArticles, type) => {
  const articles = await fetchArticles();
  await Promise.all(
    articles.map(async (article) => {
      try {
        const footnotes = getFootnotesContentFromHtml(article.footnotes);
        const articleContent = htmlToProsemirror(article.contenu, footnotes);

        const articleEntity = {
          slug: article.slug,
          title: cheerio.load(article.titre).text(),
          summary_fr: htmlToProsemirror(article.resume),
          type: type || "article",
          active: article.active,
          position: article.position,
          site_id: 1,
        };

        if (article.chapitre_id) {
          articleEntity.section_id = idMapping.chapter[article.chapitre_id];
        }

        const [newArticleId] = await dp_new("Articles").insert(articleEntity);

        await dp_new("ArticleContents").insert({
          article_id: newArticleId,
          content: articleContent,
          version: 1,
        });

        await dp_new("ArticleAuthors").insert({
          article_id: newArticleId,
          author_id: idMapping.author[article.auteur_id],
        });

        await Promise.all(
          footnotes.map(async (footnote) => {
            await dp_new("Footnotes").insert({
              ...footnote,
              article_id: newArticleId,
            });
          })
        );
      } catch (e) {
        console.log(e);
      }
    })
  );
};

// migrate authors -> user role author
const migrateAuthors = async () => {
  const authors = await dp_old("auteurs").select("id", "nom", "biographie");

  await Promise.all(
    authors.map(async (author) => {
      const [newId] = await dp_new("Authors").insert({
        fullname: author.nom,
        slug: slugify(author.nom, { lower: true }),
        bio: htmlToProsemirror(author.biographie),
        site_id: 1,
      });
      idMapping.author[author.id] = newId;
    })
  );
};
// migrate volumes
const migrateVolumes = async () => {
  const volumes = await dp_old("volumes").select(
    "id",
    "titre",
    "published",
    "number",
    "active"
  );

  await Promise.all(
    volumes.map(async (volume) => {
      const [newId] = await dp_new("Volumes").insert({
        title: volume.titre,
        published_at: volume.published,
        number: volume.number,
        slug: slugify(volume.title, { lower: true }),
        active: volume.active,
        site_id: 1,
      });
      idMapping.volume[volume.id] = newId;
    })
  );
};
const migrateVolumeReleases = async () => {
  const releases = await dp_old("releases").select(
    "id",
    "published",
    "title",
    "summary_fr",
    "number"
  );

  await Promise.all(
    releases.map(async (release) => {
      await dp_new("VolumeReleases").insert({
        id: release.id,
        title: release.title,
        summary: htmlToProsemirror(release.summary_fr),
        published_at: release.published,
        number: release.number,
        site_id: 1,
      });
    })
  );
};
// migrate chapters
const migrateChapters = async () => {
  const chapters = await dp_old("chapitres").select("id", "volume_id", "titre");

  await Promise.all(
    chapters.map(async (chapter) => {
      try {
        const [id] = await dp_new("VolumeSections").insert({
          title: chapter.titre,
          volume_id: idMapping.volume[chapter.volume_id],
        });
        idMapping.chapter[chapter.id] = id;
      } catch (e) {
        console.log(e);
      }
    })
  );
};

const fetchArticles = async () => {
  const articles = await dp_old("articles").select(
    "id",
    "contenu",
    "footnotes",
    "slug",
    "active",
    "titre",
    "resume",
    "chapitre_id",
    "auteur_id",
    "position"
  );
  return articles;
};
const fetchRecensions = async () => {
  const recensions = await dp_old("book_reviews").select(
    "id",
    "contenu",
    "footnotes",
    "slug",
    "active",
    "titre",
    "resume",
    "auteur_id",
    "position"
  );
  return recensions;
};
const createSite = async () => {
  await dp_new("Sites").insert({
    id: 1,
    name: "Droit philosophie",
  });
};

const migrate = async () => {
  await createSite();
  await migrateAuthors();
  await migrateVolumes();
  await migrateVolumeReleases();
  await migrateChapters();
  await migrateArticles(fetchArticles, "article");
  await migrateArticles(fetchRecensions, "recension");
};
migrate().then(() => {
  console.log("done");
  process.exit(0);
});
