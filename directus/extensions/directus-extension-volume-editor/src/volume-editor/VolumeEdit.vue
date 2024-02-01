<template>
  <div class="px-4">
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
      <button>Enregistrer</button>
    </form>
    <h3 class="chapter_title mt-8">
      Liste des chapitres et articles associés au numéro "{{ title }}"
    </h3>
    <div v-for="section in sections" :key="section.id">
      <div class="relative border-b border-gray-800 items-center flex justify-between">
        <h4 class="w-full article_title">{{ section.title }}</h4>
        <a class="" :href="`/admin/content/VolumeSections/${section.id}`">
          <VIcon name="edit" title="Modifier le chapitre" />
        </a>
        <VIcon title="Supprimer le chapitre" class="cursor-pointer" name="close" @click="removeSection(section.id)" />
      </div>
      <draggable v-model="section.articles" @change="onPositionChange" @start="drag = true" @end="drag = false"
        item-key="id">
        <template #item="{ element: article }">
          <tr class="">
            <td>
              <VIcon name="menu" title="Glisser-déposer" />
            </td>
            <td class="h-full py-10">
              <span class="status cursor-pointer" :title="active ? 'Désactiver' : 'Activer'"
                :class="{ active: article.active }" @click="toggleActive(section.id, article.id)"></span>
            </td>
            <td class="w-full">
              <h5>{{ article.title }}</h5>
            </td>
            <td>
              <a :href="`/admin/content/Articles/${article.id}`">
                <VIcon name="edit" title="Modifier l'article" />
              </a>
              <VIcon title="Supprimer l'article" class="cursor-pointer" name="close"
                @click="removeArticle(article.id, section.id)" />
            </td>
          </tr>
        </template>
      </draggable>
      <button class="mt-4" @click="addArticle(section.id)">
        Ajouter un article
        <VIcon name="add" />
      </button>
    </div>
    <button class="mt-8" @click="addSection">
      Ajouter un chapitre
      <VIcon name="add" />
    </button>
  </div>
</template>

<script>
import { useVolumes } from "./data";
import { useForm } from "vee-validate";
import { useApi } from "@directus/extensions-sdk";
import draggable from "vuedraggable";
import { ref } from "vue";

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
    const { getVolume } = useVolumes();
    const data = await getVolume(id);
    let sections = ref(data.sections);

    const { handleSubmit, defineField } = useForm({
      initialValues: { ...data, published_at: data.published_at.split("T")[0] },
    });

    const onSubmit = handleSubmit(async (values) => {
      const { title, number, published_at, active } = values;
      await api.patch(`/items/Volumes/${id}`, {
        title,
        number,
        published_at,
        active,
      });
    });

    const [title, titleAttrs] = defineField("title");
    const [number, numberAttrs] = defineField("number");
    const [published_at, published_atAttrs] = defineField("published_at");
    const [active, activeAttrs] = defineField("active");

    const addSection = async () => {
      const position = sections.value.length + 1;
      const response = await api.post(`/items/VolumeSections`, {
        volume_id: id,
        position,
        title: "Nouveau chapitre",
      });
      window.location.href =
        "/admin/content/VolumeSections/" + response.data.data.id;
    };

    const addArticle = async (sectionId) => {
      const position =
        sections.value.find((section) => section.id === sectionId).articles
          .length + 1;
      const response = await api.post(`/items/Articles`, {
        section_id: sectionId,
        position,
        title: "Nouvel article",
      });
      window.location.href = "/admin/content/Articles/" + response.data.data.id;
    };

    const removeArticle = async (articleId, sectionId) => {
      if (!confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) return;
      sections.value = sections.value.map((section) => {
        if (section.id === sectionId) {
          section.articles = section.articles.filter(
            (article) => article.id !== articleId
          );
        }
        return section;
      });

      await api.delete(`/items/Articles/${articleId}`);
    };

    const removeSection = async (sectionId) => {
      if (!confirm("Êtes-vous sûr de vouloir supprimer ce chapitre ?")) return;
      sections.value = sections.value.filter(
        (section) => section.id !== sectionId
      );
      await api.delete(`/items/VolumeSections/${sectionId}`);
    };

    const onPositionChange = (elem) => {
      const { element } = elem.moved;
      const section = sections.value.find(
        (section) => section.id === element.section_id
      );
      section.articles.forEach((article, index) => {
        article.position = index + 1;
        api.patch(`/items/Articles/${article.id}`, {
          position: article.position,
        });
      });
    };

    const toggleActive = async (sectionId, articleId) => {
      let active;
      sections.value = sections.value.map((section) => {
        if (section.id === sectionId) {
          section.articles = section.articles.map((article) => {
            if (article.id === articleId) {
              article.active = !article.active;
              active = article.active;
            }
            return article;
          });
        }
        return section;
      });
      await api.patch(`/items/Articles/${articleId}`, {
        active,
      });
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
      removeArticle,
      removeSection,
      sections,
      onPositionChange,
      toggleActive,
    };
  },
};
</script>

<style scoped>
form {
  @apply flex flex-col;
}

input {
  @apply border border-gray-800 rounded-md shadow-sm w-2/3 p-2 bg-gray-900 text-gray-300;
}

label {
  @apply text-gray-300 mt-4;
}

.chapter_title {
  @apply text-2xl p-1 my-2 italic text-secondary font-semibold;
}

.article_title {
  @apply text-xl p-1 my-4 italic text-accent-light font-semibold;
}

.status {
  @apply bg-red-500 w-2 h-2 rounded-full my-2 mr-2 hover:border-white hover:border hover:border-solid;
}

.status.active {
  @apply bg-green-500;
}

td {
  @apply border-none px-4 py-2 flex flex-row items-center;
}

tr:nth-child(even) {
  @apply bg-gray-900;
}

tr {
  @apply border-b border-gray-800 flex items-center cursor-grab hover:bg-gray-800;
}

button {
  @apply border border-gray-600 rounded-md shadow-sm p-2 w-64 my-2;
}
</style>
