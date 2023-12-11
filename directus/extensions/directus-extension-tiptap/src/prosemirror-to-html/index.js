import { generateHTML } from "@tiptap/html";
import { writeFileSync } from "fs";
import { load } from "cheerio";
import * as htmlparser2 from "htmlparser2";
import StarterKit from "@tiptap/starter-kit";
import Footnote, { FontVariant } from "tiptap-extension-footnote";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";

export default ({ filter, action }) => {
  filter("Articles.items.read", (items) => {
    return items.map((item) => {
      if (
        item.slug !==
        "la-querelle-de-machiavel-en-france-aux-xixe-et-xxe-siecles-124"
      )
        return item;

      if (!item.article_contents) return item;
      const lastArticleContent =
        item.article_contents[item.article_contents.length - 1];

      if (lastArticleContent.content_bis) {
        let articleContent = lastArticleContent.content_bis;
        console.log("writing test.json");
        writeFileSync(
          "./test.json",
          JSON.stringify(lastArticleContent.content_bis)
        );
        if (articleContent.type !== "doc") {
          articleContent = {
            type: "doc",
            content: lastArticleContent.content_bis,
          };
        }
        articleContent = {
          type: "doc",
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "Au XVIIIe siècle, cependant permis de lever en partie la condamnation de Machiavel comme un conseiller en tyrannie. Celle de Rousseau, affirmant dans le Contrat social que « le Prince de Machiavel est le grand livre des républicains » puisque « en feignant de donner des leçons aux rois, il en a donné de grandes aux peuples »",
                },
                {
                  type: "footnote",
                  attrs: {
                    uid: "fc10c97b3fd",
                  },
                  content: [
                    {
                      type: "paragraph",
                      attrs: {
                        textAlign: "left",
                      },
                      content: [
                        {
                          type: "text",
                          text: "2. J.-J. Rousseau, Œuvres complètes, vol. III, Paris, Gallimard, coll. La Pléiade, 1964, p. 409.",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "text",
                  text: ", en est la plus représentative",
                },
                {
                  type: "footnote",
                  attrs: {
                    uid: "c10c97b3fd7",
                  },
                  content: [
                    {
                      type: "paragraph",
                      attrs: {
                        textAlign: "left",
                      },
                      content: [
                        {
                          type: "text",
                          text: "3. Voir R. Mortier, « Les ambiguïtés du machiavélisme en France », in : A. Dierkens (dir.), L’antimachiavélisme : de la Renaissance aux Lumières, Bruxelles, Éditions de l’Université de Bruxelles, 1997.",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "text",
                  text: ". Cette lecture opposition entre le Prince et les Discours sur la première décade de Tite-Live, et la préférence donnée aux Discours, considérés comme un bréviaire de vie civile, constituait un des traits marquants de la disposition des hommes des Lumières à l’égard de Machiavel.",
                },
              ],
            },
          ],
        };

        item.content = generateHTML(articleContent, [
          StarterKit,
          Link,
          TextAlign.configure({
            types: ["paragraph"],
          }),
          TextStyle.configure({
            HTMLAttributes: {
              style: "font-variant",
            },
          }),
          FontVariant,
          Footnote,
        ]);
        delete item.article_contents;
      }

      if (!item.content) return item;
      const dom = htmlparser2.parseDocument(item.content);
      htmlparser2.DomUtils.getElements({ tag_name: "footnote" }, dom).forEach(
        (el) => {
          const id = el.attribs.uid;
          const content = el.children[0].children[0].data;
          el.name = "a";
          el.attribs = {
            class: "footnote-link",
            "data-footnote-id": `#footnote-${id}`,
            href: "#nowhere",
            "data-footnote-content": content,
          };
          el.children = [];
        }
      );
      item.content = htmlparser2.DomUtils.getOuterHTML(dom);

      return item;
    });
  });
};
