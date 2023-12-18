import { generateHTML } from "@tiptap/html";
import { writeFileSync } from "fs";
import * as htmlparser2 from "htmlparser2";
import render from "dom-serializer";
import StarterKit from "@tiptap/starter-kit";
import Footnote, { FontVariant } from "tiptap-extension-footnote";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";

export default ({ filter }) => {
  filter("Articles.items.read", (items) => {
    return items.map((item) => {
      if (!item.article_contents) return item;
      const lastArticleContent =
        item.article_contents[item.article_contents.length - 1];

      if (lastArticleContent.content_bis) {
        let articleJSONContent = lastArticleContent.content_bis;
        item.content = generateHTMLFromJSON(articleJSONContent);
        delete item.article_contents;
      }

      if (!item.content) return item;
      const dom = htmlparser2.parseDocument(item.content);
      htmlparser2.DomUtils.getElements({ tag_name: "footnote" }, dom).forEach(
        (el) => {
          const id = el.attribs.uid;
          const content = el.children.map((child) => render(child)).join("");
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
  filter("Authors.items.read", (items) => {
    return items.map((item) => {
      if (!item.bio) return item;
      item.bio = generateHTMLFromJSON(item.bio);
      return item
    });
  });
};

function generateHTMLFromJSON(articleContent) {
  if (articleContent.type !== "doc") {
    articleContent = {
      type: "doc",
      content: articleContent,
    };
  }

  articleContent = generateHTML(articleContent, [
    StarterKit,
    Link,
    TextAlign.configure({
      types: ["paragraph", "heading"],
    }),
    TextStyle.configure({
      HTMLAttributes: {
        style: "font-variant",
      },
    }),
    FontVariant,
    Footnote,
  ]);
  return articleContent;
}
