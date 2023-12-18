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

function htmlToProsemirror(html, footnotes = [], isFootnote = false) {
  let $;
  try {
    $ = load(html);
  } catch (e) {
    // console.log(html);
    throw e;
  }
  $(".JP_citation").replaceWith(function () {
    return `<blockquote>${$(this).html()}</blockquote>`;
  });
  $(".JPcitation").replaceWith(function () {
    return `<blockquote>${$(this).html()}</blockquote>`;
  });

  $(".titre-section").replaceWith(function () {
    return `<h3>${$(this).html()}</h3>`;
  });
  $(".titre-sous-section").replaceWith(function () {
    console.log("titre-sous-section");
    return `<h4>${$(this).html()}</h4>`;
  });

  html = $.html();

  const extensions = [
    StarterKit,
    TextStyle.configure({
      HTMLAttributes: {
        style: "font-variant",
      },
    }),
    FontVariant,
  ];
  if (!isFootnote) {
    extensions.push(
      Link.extend({
        parseHTML() {
          return [{ tag: "a[href]" }];
        },
      })
    );
    extensions.push(
      TextAlign.configure({
        types: ["paragraph", "heading"],
        alignments: ["left", "center", "justify"],
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
  const fields = ["id", "biographie", "nom"];
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

  const authors = await dp_old("auteurs").select(...fields);

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

  for (const directus_author of authors) {
    const bio = htmlToProsemirror(directus_author.biographie);
    const directus_authors = await directus("Authors")
      .select("id")
      .where("fullname", directus_author.nom)
      .andWhere("site_id", 1);

    if (directus_authors.length > 1) {
      console.log("multiple authors found", directus_authors);
    } else if (directus_authors.length === 0) {
      console.log("no author found", directus_author.nom);
      continue;
    }

    for (const directus_author of directus_authors) {
      console.log("updating author", directus_author.id);
      await directus("Authors").where("id", directus_author.id).update({
        bio,
      });
    }
  }
};

migrateDp().then(() => {
  // console.log("done migrating dp");
  process.exit(0);
});
