import { useItems, useApi } from "@directus/extensions-sdk";
import { ref } from "vue";

export function useVolumes() {
  async function getVolume(id) {
    const collectionRef = ref("Volumes");

    const query = {
      fields: ref(["*"]),
      limit: ref(1),
      sort: ref(null),
      search: ref(null),
      filter: ref(null),
      page: ref(1),
    };

    // sort articles in chapters by position

    query.filter.value = { id: id };
    query.fields.value = [
      "slug",
      "title",
      "number",
      "active",
      "published_at",
      "sections.title",
      "sections.id",
      "sections.position",
      "sections.chapters.position",
      "sections.chapters.id",
      "sections.chapters.title",
      "sections.chapters.articles.title",
      "sections.chapters.articles.id",
      "sections.chapters.articles.section_id",
      "sections.chapters.articles.position",
      "sections.chapters.articles.active",
      "sections.chapters.articles.authors.author_id.fullname",
      "sections.articles.title",
      "sections.articles.id",
      "sections.articles.section_id",
      "sections.articles.position",
      "sections.articles.active",
      "sections.articles.authors.author_id.fullname",
    ];
    const { getItems, items } = useItems(collectionRef, query);

    await getItems();

    return items?.value[0];
  }
  async function createSection(api, volumeId) {
    const response = await api.post(`/items/VolumeSections`, {
      volume_id: volumeId,
    });
    console.log(response);
  }
  return { getVolume, createSection };
}
