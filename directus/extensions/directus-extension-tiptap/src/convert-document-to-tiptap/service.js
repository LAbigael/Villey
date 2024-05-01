import * as htmlparser2 from "htmlparser2";
import render from "dom-serializer";
import { uid } from "uid";
import { generateJSON } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import SuperScript from "@tiptap/extension-superscript";
import Footnote, { FontVariant } from "tiptap-extension-footnote";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Image from "@tiptap/extension-image";

export const htmlToTiptap = (html) => {
  const articleContent = generateJSON(html, [
    StarterKit,
    SuperScript,
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
  ]);
  return articleContent;
};
export function transformHTML(html) {
  html = html.replace(
    /<span class="small-caps">(.*?)<\/span>/g,
    "<span style='font-variant: small-caps;'>$1</span>"
  );

  // <p class="center-aligned">*</p>
  html = html.replace(
    /<p class="center-aligned">(.*?)<\/p>/g,
    "<p style='text-align: center;'>$1</p>"
  );
  html = html.replace(
    /<p class="right-aligned">(.*?)<\/p>/g,
    "<p style='text-align: right;'>$1</p>"
  );
  html = html.replace(
    /<p class="left-aligned">(.*?)<\/p>/g,
    "<p style='text-align: left;'>$1</p>"
  );

  return html;
}
export function extractFootnotes(html) {
  const footnotes = [];
  const dom = htmlparser2.parseDocument(html);
  htmlparser2.DomUtils.getElements({ tag_name: "li" }, dom).forEach((el, i) => {
    let id = el.attribs.id;
    if (id && id.startsWith("footnote-")) {
      let content = render(el.children[0]).replace(/<a.*?<\/a>/, "");
      content = transformHTML(content);
      content = htmlToTiptap(content);
      if (content.type = "doc") {
        content = content.content[0];
      }
      footnotes.push({ position: i + 1, id, content, uid: uid() });
    }
  });

  // get ordered list containing element with id like footnote and remove it from html
  const parentList = htmlparser2.DomUtils.getElements(
    { tag_name: "ol" },
    dom
  ).find((el) => {
    return el.children.some((child) => {
      return (
        child.attribs &&
        child.attribs.id &&
        child.attribs.id.startsWith("footnote-")
      );
    });
  });
  if (parentList) {
    const parentListIndex = dom.children.indexOf(parentList);
    dom.children.splice(parentListIndex, 1);
  }

  return { html: render(dom), footnotes };
}

export const modifyJsonToMatchTiptapSchema = (json, footnotes = []) => {
  const replaceWithTiptapMarks = (node) => {
    if (node.marks) {
      node.marks.forEach((mark) => {
        if (footnotes.length > 0) {
          if (mark.type === "link" && mark.attrs.href) {
            replaceLinkWithFootnote();
          }
        }

        function replaceLinkWithFootnote() {
          // remove # from href (ex: #footnote-3)
          
          const footnoteRef = mark.attrs.href.replace("#", "");
          if (!footnoteRef) {
            // normal link
            return;
          }

          const footnote = footnotes.find((f) => f.id === footnoteRef);
          if (footnote) {
            node.type = "footnote";
            // remove [1] from text
            // footnote.content = footnote.content.replace(/\[\d+\]/g, "").trim();
            node.content = footnote.content
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

    if (node.content ) {
      if (!Array.isArray(node.content)) {
        node.content = [node.content];
      }
      node.content.forEach((child) => replaceWithTiptapMarks(child));
    }
  };

  json.content.forEach((node) => replaceWithTiptapMarks(node));

  return json
};
