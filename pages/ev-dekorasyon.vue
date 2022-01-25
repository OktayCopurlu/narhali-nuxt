<template>
  <div>
    <EvDekorasyonu/>
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent, toRefs } from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const state = reactive({ });
    return {
      ...toRefs(state),
    };
  },
  head() {
    return {
      title: "title",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "some page description",
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped></style>
