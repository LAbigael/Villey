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
  <h3 class="chapter_title">
    Liste des chapitres et articles associés au numéro "{{ data.title }}"
  </h3>
  <div v-for="section in data.sections" :key="section.id">
    <h4 class="article_title">{{ section.title }}</h4>
    <table class="table-auto">
      <tbody>
        <tr v-for="article in section.articles" :key="article.id">
          <td class="relative">
            <span class="status" :class="{ active: article.active }"></span>
            <h5>{{ article.title }}</h5>
            <a class="absolute right-0" :href="`/admin/content/Articles/${article.id}`">Modifier</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useVolumes } from "./data";
import { useForm, useFieldArray } from "vee-validate";

export default {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  async setup(props) {
    const { id } = props;
    const { getVolume } = useVolumes();
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
  @apply bg-red-500 w-2 h-2 rounded-full mr-2;
}

.status.active {
  @apply bg-green-500;
}

table {
  @apply w-full border-none;
}

th {
  @apply bg-gray-800 border px-4 py-2;
}

td {
  @apply border border-gray-800 px-4 py-2 flex flex-row items-center;
}

tr:nth-child(even) {
  @apply bg-gray-900;
}

button {
  @apply border border-gray-800 rounded-md shadow-sm p-2;
}
</style>
