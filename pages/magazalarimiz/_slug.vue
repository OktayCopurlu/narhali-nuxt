<template>
  <Magazalarimiz :magaza="result" />
</template>
    <script lang="ts">
import { useContent } from "~/queries/queryOperations";
export default {
  async asyncData({ params }) {
    const pageRoute = params.slug;
    const result = await useContent("magazalarimiz", pageRoute);
    return { result };
  },
  head: {
    title: "title",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "some page description",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
@import "~/static/main";
</style>
