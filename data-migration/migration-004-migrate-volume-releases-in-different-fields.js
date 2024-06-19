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

function htmlToProsemirror(html, footnotes = [], isFootnote = false) {
  let $;
  try {
    $ = load(html);
  } catch (e) {
    // console.log(html);
    throw e;
  }

  $("h2").replaceWith(function() {
    return `<h3>${$(this).html()}</h3>`;
  });
  $("h3").replaceWith(function() {
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

  return parsedJson;
}
const parseSummaryHTML = (pageContent) => {
  const $ = load(pageContent);

  const publisher = $('p:contains("Éditeur : ") + p')
    .text()
    .replace("Éditeur : ", "");

  const published_on = $('p:contains("Date de parution : ") + p')
    .text()
    .replace("Date de parution : ", "");

  const price = $('p:contains("Prix : ") + p').text().replace("Prix : ", "");

  const link = $("a").attr("href");
  
// Extract content from the "Sommaire" section
const sommaireContent = $('h1:contains("Sommaire")').nextAll().map((_, el) => $(el).clone()).get();

// Generate new HTML with titles, unordered lists, and list items
let newHtml = '';
sommaireContent.forEach((content) => {
  console.log(" - ", content.html())
  // newHtml += `<h2>${content.text().trim()}</h2>\n<ul>\n`;

  // content.nextUntil('h1').each((_, el) => {
  //   if ($(el).is('h2')) {
  //     return false; // Stop when encountering the next title
  //   }

  //   if ($(el).is('p')) {
  //     const listItems = $(el).html().split('<br>').map(item => item.trim()).filter(item => item !== '');
  //     listItems.forEach(item => {
  //       newHtml += `  <li>${item}</li>\n`;
  //     });
  //   }
  // });

  // newHtml += '</ul>\n';
});

  const tableOfContent = newHtml;
  console.log(tableOfContent);
  process.exit(0);

  const summary = $.html();

  return { summary, link, publisher, tableOfContent, price, published_on };
};

const migrateDp = async () => {
  const fields = ["id", "number", "title", "summary_fr", "published"];
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

  const releases = await dp_old("releases").select(...fields);

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

  for (const release of releases) {
    const {
      summary,
      subtitle,
      link,
      publisher,
      tableOfContent,
      price,
      published_on,
    } = parseSummaryHTML(release.summary_fr);

    const summaryJson = htmlToProsemirror(summary);

    const tableOfContentJson = htmlToProsemirror(tableOfContent);

    const directusReleases = await directus("VolumeReleases")
      .select("id")
      .where("number", release.number)
      .andWhere("site_id", 1);

    for (const directusRelease of directusReleases) {
      console.log("updating release", directusRelease.id);
      console.log(link, publisher, price, published_on);
      // await directus("Authors").where("id", directusRelease.id).update({
      //   bio,
      // });
    }
  }
};

migrateDp().then(() => {
  // console.log("done migrating dp");
  process.exit(0);
});
