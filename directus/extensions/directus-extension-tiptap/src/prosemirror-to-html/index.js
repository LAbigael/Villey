import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Footnote from "tiptap-extension-footnote";
import Blockquote from "@tiptap/extension-blockquote";
import Link from "@tiptap/extension-link";

export default ({ filter, action }) => {
  filter("Abstracts.items.read", (items) => {
    return items.map((item) => {
      console.log("Reading !", item.test_tiptap);
      item.test_tiptap = generateHTML(item.test_tiptap, [
        StarterKit,
        Footnote,
        Blockquote,
        Link,
      ]);
      return item;
    });
  });
};
