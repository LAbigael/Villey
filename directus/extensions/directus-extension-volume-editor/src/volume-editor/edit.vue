<template>
  <private-view title="Modifier un volume">
    <Suspense>
      <template #default>
        <VolumeEdit :id="id" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </private-view>
</template>
<script>
import { Suspense } from "vue";
import VolumeEdit from "./VolumeEdit.vue";

export default {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  components: { VolumeEdit, Suspense },

  setup(props) {
    const { id } = props;



    return {id};
  },
};
</script>
