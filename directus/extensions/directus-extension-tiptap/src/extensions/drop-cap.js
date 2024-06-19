import "@tiptap/extension-text-style";

import { Mark, mergeAttributes } from "@tiptap/core";
const DropCap = Mark.create({
  name: "dropCap",

  addOptions() {
    return {
      types: ["paragraph"],
      HTMLAttributes: {
        class: {
            default: "drop-cap",
        },
      },
    };
  },

  parseHTML: (element) =>
  [
    {
      getAttrs:  node => node.classList.contains("drop-cap")
    }
  ],

 renderHTML: ({ HTMLAttributes }) => {
                  return ['span', mergeAttributes({ class: "drop-cap" }, HTMLAttributes), 0]
  },

  addCommands() {
    return {
      toggleDropCap:
        () =>
        ({ chain }) => {
          return chain().toggleMark("dropCap").run();
        },
    };
  },
});

export default DropCap;
