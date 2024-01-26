<template>
  <div>Les volumes</div>
  <div v-for="item in data" :key="item.id">
    <div>{{ item.title }}</div>
  </div>
</template>
<script>
import { useItems } from "@directus/extensions-sdk";
import { ref } from "vue";
export default {
  async setup() {
    console.log("VolumeList setup");
    const collectionRef = ref("Volumes");

    const query = {
      fields: ref(["*"]),
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
    console.log(data);

    return {
      data,
    };
  },
};
</script>
