<template>
  <VList v-for="item in data" :key="item.id">
    <VListItem :clickable="true" :href="`volume-editor/edit/${item.id}`">
      <tr class="w-full flex items-center cursor-pointer">
        <td class="h-full py-10">
          <span class="status" :class="{ active: item.active }"></span>
        </td>
        <td class="w-full">
          <h5>{{ item.title }}</h5>
        </td>
        <td>
          <a target="_self" :href="`/admin/volume-editor/edit/${item.id}`">
            <VIcon name="edit" title="Modifier le volume" />
          </a>
        </td>
      </tr>
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
<style>
.status {
  @apply bg-red-500 w-2 h-2 rounded-full my-2 mr-2;
}

.status.active {
  @apply bg-green-500;
}

td {
  @apply border-none px-4 py-2 flex flex-row items-center;
}

tr:nth-child(even) {
  @apply bg-slate-2 00;
}

tr {
  @apply border-b border-gray-800;
}
</style>
