import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Footnote from "tiptap-extension-footnote";
import Link from "@tiptap/extension-link";

export default ({ filter, action }) => {
  filter("Articles.items.read", (items) => {
    return items.map((item) => {
      const lastArticleContent =
        item.article_contents[item.article_contents.length - 1];

      if (lastArticleContent.content_bis) {
        item.content = generateHTML(
          lastArticleContent.content_bis,
          [StarterKit, Footnote, Link]
        );
        delete item.article_contents;
      }
      return item;
    });
  });
};
