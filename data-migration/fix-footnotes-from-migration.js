require("dotenv").config();
const { writeFile } = require("fs");
const cheerio = require("cheerio");
const { uid } = require("uid");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { DOMParser } = require("prosemirror-model");
const pmSchema = require("prosemirror-schema-basic");

const modifyJsonToMatchTiptapSchema = (json, footnotes = []) => {
  const jsonParsed = JSON.parse(json);

  const replaceWithTiptapMarks = (node) => {
    if (node.marks) {
      node.marks.forEach((mark) => {
        if (footnotes.length > 0) {
          if (mark.type === "link" && mark.attrs.href) {
            replaceLinkWithFootnote();
          }
        }
        if (mark.type === "em") {
          mark.type = "italic";
        } else if (mark.type === "strong") {
          mark.type = "bold";
        }

        function replaceLinkWithFootnote() {
          // extract footnote number from href (ex: #_ftn1 or #footnote-1250-1)
          const footnoteNumber = mark.attrs.href.match(/(\d+)$/)?.[1];
          if (!footnoteNumber) {
            // normal link
            // console.log("no footnote number found", mark.attrs.href);
            return;
          }

          const footnote = footnotes.find((f) => f.position === footnoteNumber);
          if (footnote) {
            node.type = "footnote";
            // remove [1] from text
            footnote.content = footnote.content.replace(/\[\d+\]/g, "").trim();
            node.content = [{ type: "text", text: footnote.content }];
            delete node.marks;
            delete node.text;
          } else {
            console.log(
              "footnote not found",
              footnoteNumber,
              JSON.stringify(mark)
            );
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

function getFootnotesContentFromHtml(html) {
  const $ = cheerio.load(html);
  const footnotes = [];
  // TODO : handle two footnotes with id footnote-1250-1
  $("div").each(function (i, elem) {
    try {
      if ($(elem).attr("id")) {
        const footnote = {
          hmtl: html,
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
          hmtl: html,
          position: $(elem).find("a.footnote-anchor").text(),
          content: $(elem).children("p").text().replace(/\d+\./g, "").trim(),
        };
        footnotes.push(footnote);
      }
    } catch (e) {
      console.log(e);
    }
  });
  return footnotes;
}
function htmlToProsemirror(html, footnotes = []) {
  let $;
  try {
    $ = cheerio.load(html);
  } catch (e) {
    throw e;
  }
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

const migrateDp = async () => {
  const fields = [
    "articles.id",
    "contenu",
    "footnotes",
    "slug",
    "articles.active as article_active",
    "articles.titre as article_title",
    "chapitre_id",
    "auteur_id",
    "articles.position as articles_position",
    "chapitres.titre as chapter_name",
    "volumes.titre as volume_name",
  ];
  const dp_old = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 33066,
      user: "root",
      password: "password",
      database: "droitphilosophie_old",
    },
  });

  const articles = await dp_old("articles")
    .select(...fields)
    .join("chapitres", function () {
      this.on("articles.chapitre_id", "=", "chapitres.id");
    })
    .join("volumes", function () {
      this.on("chapitres.volume_id", "=", "volumes.id");
    });

  const directus = require("knex")({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
  });

  for (const article of articles) {
    const footnotes = getFootnotesContentFromHtml(article.footnotes);
    const articleContent = htmlToProsemirror(article.contenu, footnotes);
    const directus_article = await directus("Articles")
      .select("Articles.id")
      .join("VolumeSections", "Articles.section_id", "VolumeSections.id")
      .join("Volumes", "VolumeSections.volume_id", "Volumes.id")
      .where("Articles.slug", article.slug)
      .andWhere("Articles.position", article.articles_position)
      .andWhere("VolumeSections.title", article.chapter_name)
      .andWhere("Volumes.title", article.volume_name);

    if (directus_article.length > 1) {
      console.log("multiple articles found", directus_article);
    }
    await directus("Articles").where("id", directus_article[0].id).update({
      old_article_id: article.id,
    });
    await directus("ArticleContents")
      .update({
        content_bis: articleContent,
      })
      .where("article_id", directus_article[0].id);
  }

  const recensions = await dp_old("book_reviews").select(
    "id",
    "contenu",
    "footnotes",
    "slug",
    "position"
  );
  for (const article of recensions) {
    const footnotes = getFootnotesContentFromHtml(article.footnotes);
    const articleContent = htmlToProsemirror(article.contenu, footnotes);
    const directus_article = await directus("Articles")
      .select("Articles.id")
      .where("Articles.slug", article.slug);

    if (directus_article.length > 1) {
      console.log("multiple articles found", directus_article);
    }
    await directus("Articles")
      .update({
        old_article_id: article.id,
      })
      .where("id", directus_article[0].id);
    await directus("ArticleContents")
      .update({
        content_bis: articleContent,
      })
      .where("article_id", directus_article[0].id);
  }
};
const migrateJp = async () => {
  const fields = [
    "articles.id",
    "content",
    "footnotes",
    "articles.slug as article_slug",
    "chapter_id",
    "articles.position as article_position",
    "chapters.slug as chapter_name",
    "releases.slug as volume_name",
  ];
  const jp_old = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 33066,
      user: "root",
      password: "password",
      database: "juspoliticum_old",
    },
  });
  const articles = await jp_old("articles")
    .select(...fields)
    .join("chapters", function () {
      this.on("articles.chapter_id", "=", "chapters.id");
    })
    .join("releases", function () {
      this.on("chapters.release_id", "=", "releases.id");
    });
  const directus = require("knex")({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
  });
  for (const article of articles) {
    const footnotes = getFootnotesContentFromHtml(article.footnotes);
    const articleContent = htmlToProsemirror(article.content, footnotes);
    const command = directus("Articles")
      .select("Articles.id")
      .join("VolumeSections", "Articles.section_id", "VolumeSections.id")
      .join("Volumes", "VolumeSections.volume_id", "Volumes.id")
      .where("Articles.slug", article.article_slug)
      .andWhere("Articles.position", article.article_position)
      .andWhere("VolumeSections.slug", article.chapter_name)
      .andWhere("Volumes.slug", article.volume_name);

    const directus_article = await command;

    await directus("Articles")
      .update({
        old_article_id: article.id,
      })
      .where("id", directus_article[0].id);
    await directus("ArticleContents")
      .update({
        content_bis: articleContent,
      })
      .where("article_id", directus_article[0].id);

    if (directus_article.length > 1) {
      console.log("multiple articles found", directus_article);
    }
  }
};
migrateJp().then(() => {
  console.log("done migrating jp");
  migrateDp().then(() => {
    console.log("done migrating dp");
    process.exit(0);
  });
});
