<template>
  <private-view title="Liste des volumes">
    <template #navigation>
      <PageNavigation />
    </template>

    <h2>Liste des volumes</h2>
    <Suspense>
      <template #default>
        <VolumeList />
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
  setup() { },
};
</script>
