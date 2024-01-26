<template>
  <private-view title="Editeur de volume">
    <div>Content goes here... not</div>
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

export default {
  components: { VolumeList, Suspense },
  setup() { },
};
</script>
