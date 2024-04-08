import { generateHTML } from "@tiptap/html";
import * as htmlparser2 from "htmlparser2";
import render from "dom-serializer";
import StarterKit from "@tiptap/starter-kit";
import Footnote, { FontVariant } from "tiptap-extension-footnote";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Image from "@tiptap/extension-image";
import DropCap from "../extensions/drop-cap";

export default ({ filter }) => {
  filter("Articles.items.read", (items) => {
    return items.map((item) => {
      if (!item.article_contents) return item;

      item = setLatestContentFromContentVersions(item);

      if (!item.content) return item;

      item.content = generateLinkFromFootnoteTags(item);

      item = transformAbstractsToHTML(item);

      return item;
    });
  });
  filter("Volumes.items.read", (items) => {
    return items.map((item) => {
      if (item.sections) {
        item.sections = item.sections.map((section) => {
          if (section.articles) {
            section.articles = section.articles.map((article) => {
              return transformAbstractsToHTML(article);
            });
          }
          return section;
        });
      }
      return item;
    });
  });
  filter("Authors.items.read", (items) => {
    return items.map((item) => {
      if (item.articles) {
        item.articles = item.articles.map((article) => {
          if (!article.article_id) return article;
          return { article_id: transformAbstractsToHTML(article.article_id) };
        });
      }
      return item;
    });
  });
  filter("Themes.items.read", (items) => {
    return items.map((item) => {
      if (item.articles) {
        item.articles = item.articles.map((article) => {
          if (!article.article_id) return article;
          return { article_id: transformAbstractsToHTML(article.article_id) };
        });
      }
      return item;
    });
  });

  transformItemsFieldFromToHTML(filter, "Authors.items.read", "bio");
  transformItemsFieldFromToHTML(
    filter,
    "VolumeReleases.items.read",
    "abstract"
  );
  transformItemsFieldFromToHTML(
    filter,
    "VolumeReleases.items.read",
    "subtitle"
  );
  transformItemsFieldFromToHTML(
    filter,
    "VolumeReleases.items.read",
    "table_of_content"
  );
  transformItemsFieldFromToHTML(
    filter,
    "ContributionCalls.items.read",
    "content"
  );
  transformItemsFieldFromToHTML(filter, "Abstract.items.read", "content");
};

function setLatestContentFromContentVersions(item) {
  const lastArticleContent =
    item.article_contents[item.article_contents.length - 1];

  if (lastArticleContent?.content_bis) {
    let articleJSONContent = lastArticleContent.content_bis;
    delete item.article_contents;
    item.content = generateHTMLFromJSON(articleJSONContent);
  }
  return item;
}

function generateLinkFromFootnoteTags(item) {
  const dom = htmlparser2.parseDocument(item.content);
  htmlparser2.DomUtils.getElements({ tag_name: "footnote" }, dom).forEach(
    (el) => {
      const id = el.attribs.uid;
      const content = el.children.map((child) => render(child)).join("");
      el.name = "a";
      el.attribs = {
        class: "footnote-link ",
        "data-footnote-id": `#footnote-${id}`,
        href: "#nowhere",
        "data-footnote-content": content,
      };
      if (!footnoteShouldBeCounted(htmlparser2.DomUtils.textContent(el))) {
        el.attribs.class += " no-count";
      }
      el.children = [];
    }
  );
  return render(dom);
}

function transformAbstractsToHTML(item) {
  const abstracts = item.abstracts;
  if (!abstracts) return item;
  for (const abstract of abstracts) {
    if (abstract?.content_bis) {
      abstract.content = generateHTMLFromJSON(abstract.content_bis);
      delete abstract.content_bis;
    }
  }
  return item;
}

function transformItemsFieldFromToHTML(filter, collection, field) {
  filter(collection, (items) => {
    return items.map((item) => {
      if (!item[field]) return item;
      if (item[field].type === "doc") {
        item[field] = item[field].content;
      }
      item[field] = generateHTMLFromJSON(item[field]);
      return item;
    });
  });
}

function footnoteShouldBeCounted(content) {
  // If the first char of a footnote starts with *, it should not be counted
  if (!content) return false;
  if (content.trim()[0] === "*") {
    return false;
  }
  return true;
}

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
      types: ["paragraph", "heading", "blockquote"],
    }),
    TextStyle.configure({
      HTMLAttributes: {
        style: "font-variant",
      },
    }),
    FontVariant,
    Footnote,
    Table,
    TableRow,
    TableCell,
    TableHeader,
    Image,
    DropCap,
  ]);
  return articleContent;
}
