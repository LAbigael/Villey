<template>
  <div class="rounded-lg border border-white">
    au revoir titi
    <Toolbar>
      <ToolbarButton @click="editor.chain().focus().toggleBold().run()" :label="bold" :isActive="isActive('bold')">
        <BoldIcon />
      </ToolbarButton>
      <ToolbarButton @click="editor.chain().focus().toggleItalic().run()" :label="italic" :isActive="isActive('italic')">
        <ItalicIcon />
      </ToolbarButton>
      <ToolbarButton @click="editor.chain().focus().toggleBlockquote().run()" :label="blockquote"
        :isActive="isActive('blockquote')">
        <BlockquoteIcon />
      </ToolbarButton>
      <ToolbarButton @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :label="h3"
        :isActive="isActive('heading', { level: 3 })">
        <H3Icon />
      </ToolbarButton>
      <ToolbarButton @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :label="h4"
        :isActive="isActive('heading', { level: 4 })">
        <H4Icon />
      </ToolbarButton>
      <ToolbarButton @click="
        editor.chain().focus().insertContent({ type: 'footnote' }).run()
        " :label="footnote" :isActive="isActive('footnote')">
        <FootnoteIcon />
      </ToolbarButton>
      <ToolbarButton @click="editor.chain().focus().unsetAllMarks().run()" :label="clearFormatting">
        <ClearFormattingIcon />
      </ToolbarButton>
      <ToolbarButton @click="setLink()" :label="link">
        <LinkIcon />
      </ToolbarButton>
      <ToolbarButton @click="editor.commands.setTextAlign('left')" :label="alignLeft"
        :isActive="isActive({ textAlign: 'left' })">
        <AlignLeftIcon />
      </ToolbarButton>
      <ToolbarButton @click="editor.commands.setTextAlign('center')" :label="alignCenter"
        :isActive="isActive({ textAlign: 'center' })">
        <AlignCenterIcon />
      </ToolbarButton>
      <ToolbarButton @click="editor.commands.setTextAlign('justify')" :label="alignJustify"
        :isActive="isActive({ textAlign: 'justify' })">
        <AlignJustifyIcon />
      </ToolbarButton>
      <ToolbarButton @click="editor.commands.toggleBulletList()" :label="bulletList" :isActive="isActive('bulletList')">
        <BulletListIcon />
      </ToolbarButton>
      <ToolbarButton @click="editor.chain().focus().toggleSmallCaps().run()" :label="smallCaps"
        :isActive="isActive('textStyle', { fontVariant: 'small-caps' })">
        <span class="small-caps bold">A</span>
      </ToolbarButton>
      <ToolbarButton @click="editor.chain().focus().toggleDropCap().run()" :label="dropCap">
        <span class="drop-cap bold">L</span>
      </ToolbarButton>
      <ToolbarButton @click="editor.chain().focus().undo().run()" :label="undo">
        <UndoIcon />
      </ToolbarButton>
      <ToolbarButton @click="editor.chain().focus().redo().run()" :label="redo">
        <RedoIcon />
      </ToolbarButton>
    </Toolbar>
    <editor-content class="content" :editor="editor" />
  </div>
  <ImportDocument :setContent="setContent" />
</template>

<script>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Footnote, { FontVariant } from "tiptap-extension-footnote";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import DropCap from "../extensions/drop-cap";
import { watch ,onMounted } from "vue";
import "./style.css";
import BoldIcon from "../icons/bold.vue";
import ItalicIcon from "../icons/italic.vue";
import BlockquoteIcon from "../icons/quote-text.vue";
import FootnoteIcon from "../icons/footnote.vue";
import ClearFormattingIcon from "../icons/format-clear.vue";
import LinkIcon from "../icons/link.vue";
import ParagraphIcon from "../icons/paragraph.vue";
import UndoIcon from "../icons/arrow-go-back-line.vue";
import RedoIcon from "../icons/arrow-go-forward-line.vue";
import H3Icon from "../icons/h3.vue";
import H4Icon from "../icons/h4.vue";
import AlignLeftIcon from "../icons/align-left.vue";
import AlignCenterIcon from "../icons/align-center.vue";
import AlignJustifyIcon from "../icons/align-justify.vue";
import SmallCapsIcon from "../icons/small-caps.vue";
import BulletListIcon from "../icons/list-unordered.vue";

import Toolbar from "./components/ToolbarGroup.vue";
import ToolbarButton from "./components/ToolbarButton.vue";
import ImportDocument from "./components/ImportDocument.vue";


export default {
  components: {
    EditorContent,
    BoldIcon,
    ItalicIcon,
    BlockquoteIcon,
    FootnoteIcon,
    H3Icon,
    H4Icon,
    ClearFormattingIcon,
    LinkIcon,
    ParagraphIcon,
    UndoIcon,
    RedoIcon,
    AlignLeftIcon,
    AlignCenterIcon,
    AlignJustifyIcon,
    SmallCapsIcon,
    BulletListIcon,
    Toolbar,
    ToolbarButton,
    ImportDocument,
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
      extensions: [
        StarterKit,
        Link,
        TextAlign.configure({
          types: ["heading", "paragraph", "blockquote"],
        }),
        Footnote,
        FontVariant,
        TextStyle,
        Table,
        TableRow,
        TableCell,
        TableHeader,
        DropCap,
      ],
      onUpdate: ({ editor }) => {
        emit("input", editor.getJSON());
      },
    });

    onMounted(() => {
      editor.value?.commands.setContent(props.value);
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
    const isActive = (type, options) => {
      return editor.value?.isActive(type, options);
    };
    function setLink() {
      const previousUrl = editor.value.getAttributes("link").href;
      const url = window.prompt("URL", previousUrl);

      // cancelled
      if (url === null) {
        return;
      }

      // empty
      if (url === "") {
        editor.value.chain().focus().extendMarkRange("link").unsetLink().run();

        return;
      }

      // update link
      editor.value
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
    const setContentAndEmit = (content) =>
      editor.value?.commands.setContent(content, true);
    
    console.log("est-ce que ça build")
    return {
      editor,
      isActive,
      setLink,
      setContent: setContentAndEmit,
    };
  },
};
</script>

<style>
.ProseMirror {
  font-size: large;
  counter-reset: footnote;
  padding: 10px;
}

.ProseMirror footnote {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.ProseMirror footnote::after {
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

/* Make prosemirror fixed size and content scrollable */
.ProseMirror {
  max-height: 400px;
  overflow: auto;
}

.drop-cap {
  font-size: 3em;
  line-height: 0.8;
  float: left;
  margin-right: 0.1em;
}

.toolbar .drop-cap {
  font-size: 1.5em;
  
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

.ProseMirror button {
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
  transition: background-color 0.2s;
}

.ProseMirror button.active {
  background-color: #aaa;
}

.ProseMirror blockquote {
  border-left: 2px solid #aaa;
  margin-left: 0;
  margin-right: 0;
  padding-left: 10px;
  color: #aaa;
  font-style: italic;
}


.ProseMirror h1 {
  font-size: 1.5em;
  font-weight: bold;
  color: red;
}

.ProseMirror h1 {
  font-size: 1.5em;
  font-weight: bold;
  color: red;
}

.ProseMirror h3 {
  font-size: 1.5em;
  font-weight: bold;
}

.ProseMirror h4 {
  font-size: 1.25em;
  font-weight: bold;
}

.ProseMirror p {
  margin: 15px 0;
}

.ProseMirror h3 {
  margin: 30px 0;
  font-size: 1.1em;
  font-weight: bold;
}

.ProseMirror h4 {
  margin: 20px 0;
  font-size: 1em;
  font-weight: bold;
}

.ProseMirror a {
  color: #007aff;
  text-decoration: none;
}

.footnote-toolbar {
  @apply ml-4 mt-8;
}

.footnote-toolbar .button {
  @apply mr-2 border;
}

.content .ProseMirror ul {
  list-style-type: disc;
  margin: 0;
  padding-left: 1em;
}

.ProseMirror table {
  border-collapse: collapse;
  width: 100%;
}

.ProseMirror tr {
  @apply flex flex-row;
  border: 1px solid white;
}

.ProseMirror th,
.ProseMirror td {
  border: 1px solid white;
  padding: 8px;
  text-align: left;
}

.ProseMirror h1::after,
.ProseMirror h2::after {
  content: "Titre non conforme";
  padding: 2px;
  display: none;
  position: relative;
  top: -20px;
  right: -30px;
  width: 150px;
  text-align: center;
  background-color: #fef4c5;
  border: 1px solid #d4b943;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  -ms-border-radius: 2px;
  border-radius: 2px;
}

.ProseMirror h1:hover::after,
.ProseMirror h2:hover::after {
  display: block;
}
</style>

