<template>
  <form @submit="onSubmit">
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer" v-model="active" v-bind="activeAttrs" />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
      </div>
      <span class="ms-3 font-medium text-gray-900 dark:text-gray-300">En ligne</span>
    </label>
    <label>Titre du volume </label>
    <input type="text" v-model="title" v-bind="titleAttrs" />
    <label>Numéro du volume </label>
    <input type="text" v-model="number" v-bind="numberAttrs" />
    <label>Date de publication </label>
    <input type="date" v-model="published_at" v-bind="published_atAttrs" />
    <button>Submit</button>
  </form>
  <button class="mt-4" @click="addSection">Ajouter un chapitre</button>
  <h3 class="chapter_title">
    Liste des chapitres et articles associés au numéro "{{ data.title }}"
  </h3>
  <div v-for="section in data.sections" :key="section.id">
    <div class="relative flex justify-between">
      <h4 class="article_title">{{ section.title }}</h4>
      <a class="absolute right-0" :href="`/admin/content/VolumeSections/${section.id}`">
        <VIcon name="edit" />
      </a>
    </div>
    <draggable v-model="section.articles" @start="drag = true" @end="drag = false" item-key="id">
      <template #item="{ element }">
        <tr class="flex items-center">
          <td class="h-full py-10">
            <span class="status" :class="{ active: element.active }"></span>
          </td>
          <td class="w-full">
            <h5>{{ element.title }}</h5>
          </td>
          <td>
            <a :href="`/admin/content/Articles/${element.id}`">
              <VIcon name="edit" title="Modifier"/>
            </a>
            <VIcon title="Supprimer" class="cursor-pointer" name="close" @click="removeAt(index)" />
          </td>
        </tr>
      </template>
    </draggable>
    <button class="mt-4" @click="addArticle(section.id)">
      Ajouter un article
    </button>
  </div>
</template>

<script>
import { useVolumes } from "./data";
import { useForm, useFieldArray } from "vee-validate";
import { useApi } from "@directus/extensions-sdk";
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  async setup(props) {
    const api = useApi();
    const { id } = props;
    const { getVolume, createSection } = useVolumes();
    const data = await getVolume(id);

    const { handleSubmit, defineField } = useForm({
      initialValues: { ...data, published_at: data.published_at.split("T")[0] },
    });

    const onSubmit = handleSubmit((values) => {
      console.log(JSON.stringify(values, null, 2));
    });

    const [title, titleAttrs] = defineField("title");
    const [number, numberAttrs] = defineField("number");
    const [published_at, published_atAttrs] = defineField("published_at");
    const [active, activeAttrs] = defineField("active");

    const addSection = async () => {
      const response = await api.post(`/items/VolumeSections`, {
        volume_id: id,
      });
      window.location.href =
        "/admin/content/VolumeSections/" + response.data.data.id;
    };
    const addArticle = async (sectionId) => {
      const position = data.sections.find((section) => section.id === sectionId)
        .articles.length;
      const response = await api.post(`/items/Articles`, {
        section_id: sectionId,
        position,
      });
      window.location.href = "/admin/content/Articles/" + response.data.data.id;
    };

    return {
      title,
      titleAttrs,
      number,
      numberAttrs,
      published_at,
      published_atAttrs,
      active,
      activeAttrs,
      onSubmit,
      data,
      addSection,
      addArticle,
    };
  },
};
</script>

<style scoped>
form {
  @apply flex flex-col;
}

input {
  @apply border border-gray-800 rounded-md shadow-sm w-1/2 p-2;
}

.chapter_title {
  @apply text-2xl p-1 my-2 italic text-secondary font-semibold;
}

.article_title {
  @apply text-xl p-1 my-2 italic text-accent-light font-semibold;
}

.status {
  @apply bg-red-500 w-2 h-2 rounded-full my-2 mr-2;
}

.status.active {
  @apply bg-green-500;
}

table {
  @apply w-full border-none;
}

th {
  @apply bg-gray-800 border px-4 py-2 border-none;
}

td {
  @apply border-none  px-4 py-2 flex flex-row items-center;
}

tr:nth-child(even) {
  @apply bg-gray-900;
}

button {
  @apply border border-gray-600 rounded-md shadow-sm p-2 bg-gray-800;
}
</style>
