const cheerio = require("cheerio");
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
    database: "droitphilosophie_new",
  },
});

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
            .replace(/\[\d+\]/g, "")
            .trim(),
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
  var json = JSON.stringify(parsedHTML);
  modifyJsonToMatchTiptapSchema(json, footnotes);
  return json;
}

const modifyJsonToMatchTiptapSchema = (json, footnotes = []) => {
  const jsonWithFootnotes = JSON.parse(json);

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
          const footnoteNumber = mark.attrs.href.replace("#_ftn", "");
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

  jsonWithFootnotes.content.forEach((node) => replaceWithTiptapMarks(node));

  return JSON.stringify(jsonWithFootnotes);
};

const migrateArticles = async (fetchArticles, type) => {
  const articles = await fetchArticles();
  await Promise.all(
    articles.map(async (article) => {
      try {
        const footnotes = getFootnotesContentFromHtml(article.footnotes);
        let articleContent = htmlToProsemirror(article.contenu, footnotes);

        articleContent = modifyJsonToMatchTiptapSchema(
          articleContent,
          footnotes
        );

        const articleEntity = {
          id: article.id,
          slug: article.slug,
          title: cheerio.load(article.titre).text(),
          summary: htmlToProsemirror(article.resume),
          type: type || "article",
          active: article.active,
          author_id: article.auteur_id,
          position: article.position,
        };

        if (article.chapitre_id) {
          articleEntity.section_id = article.chapitre_id;
        }

        const newArticle = await dp_new("Articles").insert(articleEntity);

        await dp_new("ArticleContents").insert({
          article_id: newArticle[0],
          content: articleContent,
          version: 1,
        });

        await Promise.all(
          footnotes.map(async (footnote) => {
            await dp_new("Footnotes").insert({
              ...footnote,
              article_id: newArticle[0],
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
      await dp_new("Authors").insert({
        id: author.id,
        fullname: author.nom,
        bio: htmlToProsemirror(author.biographie),
      });
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
      await dp_new("Volumes").insert({
        id: volume.id,
        title: volume.titre,
        published_at: volume.published_at,
        number: volume.number,
        active: volume.active,
      });
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
        await dp_new("VolumeSections").insert({
          id: chapter.id,
          title: chapter.titre,
          volume_id: chapter.volume_id,
        });
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

const migrate = async () => {
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
