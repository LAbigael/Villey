<template>
  <button
    @click="editor.chain().focus().toggleBold().run()"
    :active="editor?.isActive('bold')"
    class="button active"
    v-bind:class="{ active: editor?.isActive('bold') }"
  >
    <Bold />
  </button>
  <editor-content class="content" :editor="editor" />
  <button @click="save">save</button>
</template>

<script>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Footnote from "tiptap-extension-footnote";
import { watch } from "vue";
import "./style.css";
import Bold from "../icons/bold.vue";

export default {
  components: {
    EditorContent,
    Bold,
  },

  props: {
    value: {
      type: JSON,
      default: { type: "doc", content: [{ type: "paragraph" }] },
    },
  },
  emits: ["input"],
  setup(props, { emit }) {
    const editor = useEditor({
      extensions: [StarterKit, Footnote],
      onUpdate: ({ editor }) => {
        emit("input", editor.getJSON());
      },
    });

    const unwatch = watch(
      () => props.value,
      (value) => {
        if (value) {
          editor.value?.commands.setContent(value);
          unwatch();
        }
      }
    );

    return { editor };
  },
};
</script>

<style>
.ProseMirror {
  font-size: large;
  counter-reset: footnote;
}

footnote {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

footnote::after {
  content: counter(footnote);
  vertical-align: super;
  font-size: 75%;
  counter-increment: footnote;
}

.ProseMirror-hideselection .footnote-tooltip *::selection {
  background-color: transparent;
}

.ProseMirror-hideselection .footnote-tooltip *::-moz-selection {
  background-color: transparent;
}

.footnote-tooltip {
  color: #333;
  cursor: auto;
  position: absolute;
  left: -30px;
  top: calc(100% + 10px);
  background: silver;
  padding: 3px;
  border-radius: 2px;
  width: 500px;
}

.footnote-tooltip::before {
  border: 5px solid silver;
  border-top-width: 0px;
  border-left-color: transparent;
  border-right-color: transparent;
  position: absolute;
  top: -5px;
  left: 27px;
  content: " ";
  height: 0;
  width: 0;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

button.active {
  background-color: #aaa;
}
</style>
