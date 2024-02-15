<template>
  <div class="flex flex-col mt-8">
    <input type="file" @change="handleFileChange" />
    <button class="import_button" @click="submitFile">Importer</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useApi } from "@directus/extensions-sdk";

export default {
  props: {
    setContent: {
      type: Function,
    },
  },
  setup(props) {
    const { setContent } = props;
    console.log(setContent);

    const files = ref();
    const api = useApi();

    function handleFileChange(event) {
      files.value = event.target.files;
    }

    function submitFile() {
      const file = files.value[0];

      const formData = new FormData();
      formData.append("file", file);
      const headers = { "Content-Type": "multipart/form-data" };
      api
        .post("/convert-document-to-tiptap", formData, {
          headers,
        })
        .then((res) => {
          console.log(res.data);
          setContent(res.data);
        });
    }
    return {
      handleFileChange,
      submitFile,
    };
  },
};
</script>

<style>
.import_button {
  width: 200px;
  background-color: #6644ff;
  border-radius: 3px;
  border: none;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
