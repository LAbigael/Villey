<template>
  <VList v-for="item in data" :key="item.id">
  <VListItem :clickable="true" :href="`volume-editor/edit/${item.id}`" >
      {{ item.title }}
      <VIcon :small="true" name="circle" :filled="item.active ? 'true' : 'false'" />
    </VListItem>
  </VList>
</template>
<script>
import { useItems } from "@directus/extensions-sdk";
import { ref } from "vue";
export default {
  async setup() {
    const collectionRef = ref("Volumes");

    const query = {
      fields: ref(["title", "number", "site_id", "slug", "id", "active"]),
      limit: ref(100),
      sort: ref(null),
      search: ref(null),
      filter: ref({}),
      page: ref(1),
    };

    const { getItems, items } = useItems(collectionRef, query);

    query.search.value = ""; // update query search
    query.filter.value.site_id = 1; // update query filter
    query.sort.value = "-number"; // update query sort

    await getItems(); // fetch the items
    const data = items.value; // get the items

    return {
      data,
    };
  },
};
</script>
