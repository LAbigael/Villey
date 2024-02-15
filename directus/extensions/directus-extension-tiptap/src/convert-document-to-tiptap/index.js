import Busboy from "busboy";
import mammoth from "mammoth";
import os from "os";
import fs from "fs";
import path from "path";
import {
  modifyJsonToMatchTiptapSchema,
  transformHTML,
  htmlToTiptap,
  extractFootnotes,
} from "./service";

function transformElement(element) {
  if (element.children) {
    var children = element.children.map(transformElement);
    element = { ...element, children: children };
  }

  if (element.type === "paragraph") {
    element = transformParagraph(element);
  }

  return element;
}

function transformParagraph(element) {
  if (element.alignment === "center") {
    return { ...element, styleName: "center-aligned" };
  } else if (element.alignment === "right") {
    return { ...element, styleName: "right-aligned" };
  } else if (element.alignment === "left") {
    return { ...element, styleName: "left-aligned" };
  } else {
    return element;
  }
}

export default {
  id: "convert-document-to-tiptap",
  handler: (router) => {
    router.post("/", async (req, res, next) => {
      const busboy = Busboy({ headers: req.headers });

      busboy.on("file", (name, file, info) => {
        const saveTo = path.join(os.tmpdir(), `busboy-upload-${name}`);
        file.pipe(fs.createWriteStream(saveTo));
        const options = {
          styleMap: [
            "small-caps => span.small-caps",
            "p[style-name='Quotations'] => blockquote > p:fresh",
            "p[style-name='left-aligned'] => p.left-aligned:fresh",
            "p[style-name='center-aligned'] => p.center-aligned:fresh",
            "p[style-name='right-aligned'] => p.right-aligned:fresh",
          ],
          includeEmbeddedStyleMap: true,
          transformDocument: transformElement,
        };
        file.on("end", () => {
          mammoth
            .convertToHtml({ path: saveTo }, options)
            .then(function(result) {
              let { footnotes, html } = extractFootnotes(result.value);

              html = transformHTML(html);

              let articleContent = htmlToTiptap(html);

              articleContent = modifyJsonToMatchTiptapSchema(
                articleContent,
                footnotes
              );

              res.writeHead(200, { "Content-Type": "text/json" });
              res.end(JSON.stringify(articleContent));
            })
            .catch(function(error) {
              console.error(error);
            });
        });
      });

      busboy.on("error", (error) => {
        next(error);
      });

      req.pipe(busboy);
    });
  },
};
