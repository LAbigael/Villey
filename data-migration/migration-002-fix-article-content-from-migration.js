import dotenv from "dotenv";
dotenv.config();
import { writeFile } from "fs";
import { load } from "cheerio";
import { uid } from "uid";
import { generateJSON } from "@tiptap/html";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import FontVariant from "./tiptap-extension-font-variant.js";
import knex from "knex";
import { warn } from "console";

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
            // footnote.content = footnote.content.replace(/\[\d+\]/g, "").trim();
            node.content = JSON.parse(footnote.content);
            node.dontParse = true;
            node.attrs = {
              uid: footnote.uid,
            };
            delete node.marks;
            delete node.text;
          } else {
            // console.log("footnote not found", footnoteNumber);
          }
        }
      });
    }

    if (node.content && !node.dontParse) {
      if (!Array.isArray(node.content)) {
        node.content = [node.content];
      }
      node.content.forEach((child) => replaceWithTiptapMarks(child));
    } else if (node.content && node.dontParse) {
      delete node.dontParse;
    }
  };

  jsonParsed.forEach((node) => replaceWithTiptapMarks(node));

  return JSON.stringify(jsonParsed);
};

function getFootnotesContentFromHtml(html) {
  const $ = load(html);
  const footnotes = [];
  // TODO : handle two footnotes with id footnote-1250-1
  $("div").each(function (i, elem) {
    try {
      // remove a tag that are like [1]
      $(elem)
        .find("a")
        .each(function (i, elem) {
          if (
            $(elem)
              .text()
              .match(/^\[\d+\]$/)
          ) {
            // remove tag but keep content as text
            $(elem).replaceWith($(elem).text());
          }
        });
      if ($(elem).attr("id")) {
        const footnote = {
          hmtl: html,
          position: $(elem).attr("id").replace("ftn", ""),
          content: htmlToProsemirror($(elem).html(), [], true),
          // content: $(elem)
          //   .text()
          //   .replace(/\[\d+\]\./g, "")
          //   .trim(),
          uid: uid(),
        };
        footnotes.push(footnote);
      }
      if ($(elem).attr("class") === "footnote") {
        const footnote = {
          hmtl: html,
          position: $(elem).find("a.footnote-anchor").text(),
          content: htmlToProsemirror($(elem).children("p").html(), [], true),
          uid: uid(),
        };
        footnotes.push(footnote);
      }
    } catch (e) {
      console.log("error parsing footnote");
      console.log(e);
    }
  });
  return footnotes;
}

function replaceTagWithNewTag($, oldTag, newTag) {
  // New type of the tag
  var replacementTag = newTag;

  // Replace all a tags with the type of replacementTag
  $(oldTag).each(function (i, elem) {
    return (elem.name = replacementTag);
  });
}

function htmlToProsemirror(html, footnotes = [], isFootnote = false) {
  let $;
  try {
    $ = load(html);
  } catch (e) {
    // console.log(html);
    throw e;
  }
  replaceTagWithNewTag($, ".JP_citation", "blockquote");
  replaceTagWithNewTag($, ".JPcitation", "blockquote");
  replaceTagWithNewTag($, ".titre-section", "h3");
  replaceTagWithNewTag($, ".titre-sous-section", "h4");

  html = $.html();

  const extensions = [
    StarterKit,
    TextStyle.configure({
      HTMLAttributes: {
        style: "font-variant",
      },
    }),
    Link.extend({
      parseHTML() {
        return [{ tag: "a[href]" }];
      },
    }),
    FontVariant,
    Table,
    TableRow,
    TableHeader,
    TableCell,
  ];

  if (!isFootnote) {
    extensions.push(
      TextAlign.configure({
        types: ["paragraph", "heading", "blockquote"],
        alignments: ["right", "left", "center", "justify"],
      })
    );
  }

  const parsedJson = generateJSON(html, extensions);

  const prosemirrorJson = modifyJsonToMatchTiptapSchema(
    JSON.stringify(parsedJson.content),
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
  const dp_old = knex({
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

  const directus = knex({
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
    // console.log("migration done for article dp", article.id);
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
    // console.log("migration done for article dp", article.id);
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
  const jp_old = knex({
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
  const directus = knex({
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
    // const command = directus("Articles")
    //   .select("Articles.id")
    //   .join("VolumeSections", "Articles.section_id", "VolumeSections.id")
    //   .join("Volumes", "VolumeSections.volume_id", "Volumes.id")
    //   .where("Articles.slug", article.article_slug)
    //   .andWhere("Articles.position", article.article_position)
    //   .andWhere("VolumeSections.slug", article.chapter_name)
    //   .andWhere("Volumes.slug", article.volume_name.toLowerCase());
    const command = directus("Articles")
      .select("Articles.id")
      .where("Articles.old_article_id", article.id)
      .andWhere("Articles.site_id", 2);

    const directus_article = await command;

    if (directus_article.length === 0) {
      console.log(
        "no article found",
        article.article_slug,
        article.article_position,
        article.chapter_name,
        article.volume_name
      );
      continue;
    }
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
migrateJp().then(() => {
  console.log("done migrating jp");
  migrateDp().then(() => {
    //   console.log("done migrating dp");
    process.exit(0);
  });
});
