import "@tiptap/extension-text-style";

import { Extension } from "@tiptap/core";
const FontVariant = Extension.create({
  name: "font-variant",

  addOptions() {
    return {
      types: ["textStyle"],
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          FontVariant: {
            default: null,
            parseHTML: (element) =>
              element.style.fontVariant?.replace(/['"]+/g, ""),
            renderHTML: (attributes) => {
              if (!attributes.fontVariant) {
                return {};
              }

              return {
                style: `font-variant: ${attributes.fontVariant}`,
              };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontVariant:
        (fontVariant) =>
        ({ chain }) => {
          return chain().setMark("textStyle", { fontVariant }).run();
        },
      unsetFontVariant:
        () =>
        ({ chain }) => {
          return chain()
            .setMark("textStyle", { FontVariant: null })
            .removeEmptyTextStyle()
            .run();
        },
    };
  },
});

export default FontVariant;
