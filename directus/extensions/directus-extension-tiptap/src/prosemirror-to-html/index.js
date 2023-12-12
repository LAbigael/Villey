import { generateHTML } from "@tiptap/html";
import { writeFileSync } from "fs";
import * as htmlparser2 from "htmlparser2";
import render from "dom-serializer";
import StarterKit from "@tiptap/starter-kit";
import Footnote, { FontVariant } from "tiptap-extension-footnote";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";

export default ({ filter, action }) => {
  filter("Articles.items.read", (items) => {
    return items.map((item) => {

      if (!item.article_contents) return item;
      const lastArticleContent =
        item.article_contents[item.article_contents.length - 1];

      if (lastArticleContent.content_bis) {
        let articleContent = lastArticleContent.content_bis;
        if (articleContent.type !== "doc") {
          articleContent = {
            type: "doc",
            content: lastArticleContent.content_bis,
          };
        }

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
          const content = el.children
            .map((child) => render(child))
            .join("");
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
      item.content = render(dom);

      return item;
    });
  });
};
