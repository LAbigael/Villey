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
  $("div").each(function (i, elem) {
    const footnote = {
      position: $(elem).attr("id").replace("ftn", ""),
      content: $(elem)
        .text()
        .replace(/\[\d+\]/g, "")
        .trim(),
      uid: uid(),
    };
    footnotes.push(footnote);
  });
  return footnotes;
}

// <div id="ftn1" style="mso-element: footnote;">
// <p class="JPNdBP"><a style="mso-footnote-id: ftn1;" title="" href="#_ftnref1" name="_ftn1"><span class="MsoFootnoteReference">*</span></a> Je tiens sinc&egrave;rement &agrave; remercier Madame &Eacute;lodie Djordjevic, Monsieur le professeur Denis Baranger et Monsieur Federico Colli pour leur confiance, pour leurs aimables relectures et leurs conseils avis&eacute;s sur ce texte.</p>
// </div>

function htmlToProsemirror(html) {
  const $ = cheerio.load(html);
  $(".JP_citation").replaceWith(function () {
    return `<blockquote>${$(this).html()}</blockquote>`;
  });

  const { document } = new JSDOM(html).window;
  const parsedHTML = DOMParser.fromSchema(pmSchema.schema)
    .parse(document, { preserveWhitespace: true })
    .toJSON();
  var json = JSON.stringify(parsedHTML);
  return json;
}
const replaceLinkInProseMirrorJsonWithFootnoteAndUid = (json, footnotes) => {
  const jsonWithFootnotes = JSON.parse(json);

  const replaceLinkWithFootnote = (node) => {
    if (node.marks) {
      node.marks.forEach((mark) => {
        if (mark.type === "link" && mark.attrs.href) {
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
      node.content.forEach((child) => replaceLinkWithFootnote(child));
    }
  };

  jsonWithFootnotes.content.forEach((node) => replaceLinkWithFootnote(node));

  return JSON.stringify(jsonWithFootnotes);
};

const migrateArticles = async (fetchArticles, type) => {
  const articles = await fetchArticles();
  await Promise.all(
    articles.map(async (article) => {
      let articleContent = htmlToProsemirror(article.contenu);

      const footnotes = getFootnotesContentFromHtml(article.footnotes);

      articleContent = replaceLinkInProseMirrorJsonWithFootnoteAndUid(
        articleContent,
        footnotes
      );

      const articleEntity = {
        id: article.id,
        slug: article.slug,
        title: article.titre,
        summary: htmlToProsemirror(article.resume),
        type: type || "article",
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
    })
  );
};

// migrate authors -> user role author
const migrateAuthors = async () => {
  const authors = await dp_old("auteurs").select("id", "fullname", "bio");

  await Promise.all(
    authors.map(async (author) => {
      await dp_new("Authors").insert({
        id: author.id,
        fullname: author.fullname,
        bio: author.bio,
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
// migrate chapters
const migrateChapters = async () => {
  const chapters = await dp_old("chapitres").select("id", "volume_id", "titre");

  await Promise.all(
    chapters.map(async (chapter) => {
      await dp_new("VolumeSections").insert({
        id: chapter.id,
        title: chapter.titre,
        volume_id: chapter.active,
      });
    })
  );
};

// migrate recensions

const migrateRecensions = async () => {
  const recensions = await dp_old("book_reviews").select(
    "id",
    "titre",
    "published",
    "summary",
    "activated"
  );

  await Promise.all(
    recensions.map(async (recension) => {
      await dp_new("Recensions").insert({
        id: recension.id,
        title: recension.titre,
        published_at: recension.published,
        summary: htmlToProsemirror(recension.summary),
        active: recension.activated,
      });
    })
  );
};

const migratePaperVolumes = async () => {
  const paperVolumes = await dp_old("paper_volumes").select(
    "id",
    "titre",
    "number",
    "published",
    "summary",
    "activated"
  );

  await Promise.all(
    paperVolumes.map(async (paperVolume) => {
      await dp_new("PaperVolumes").insert({
        id: paperVolume.id,
        title: paperVolume.titre,
        number: paperVolume.number,
        published_at: paperVolume.published,
        summary: htmlToProsemirror(paperVolume.summary),
        active: paperVolume.activated,
      });
    })
  );
};

const fetchArticles = async () => {
  const articles = await dp_old("articles")
    .select("id", "contenu", "footnotes", "slug")
    .where("id", 333);
  return articles;
};
const fetchRecensions = async () => {
  const recensions = await dp_old("book_reviews")
    .select("id", "titre", "published", "summary", "activated")
    .where("id", 1);
  return recensions;
};

const migrate = async () => {
  await migrateAuthors();
  await migrateVolumes();
  await migrateChapters();
  await migrateRecensions();
  await migratePaperVolumes();
  await migrateArticles(fetchArticles, "article");
  await migrateArticles(fetchRecensions, "article");
};
