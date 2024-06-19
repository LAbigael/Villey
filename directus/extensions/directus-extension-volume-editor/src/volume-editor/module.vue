<template>
  <private-view title="Liste des volumes">
    <template #navigation>
      <PageNavigation />
    </template>
    <Suspense>
      <template #default>
        <VolumeList :siteId="siteId"/>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
    <VolumeList />
  </private-view>
</template>

<script>
import VolumeList from "./VolumeList.vue";
import { Suspense } from "vue";
import PageNavigation from "./PageNavigation.vue";

export default {
  components: { VolumeList, Suspense, PageNavigation },
  props: {
    siteId: {
      type: String,
      default: 1,
    },
  },
  setup({ siteId }) {
    console.log(siteId);
    return { siteId };
  },
};
</script>
