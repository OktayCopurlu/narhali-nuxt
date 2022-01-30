<template>
  <div class="urun-link-container">
    <Hakkimizda :hakkimizda="data" />
  </div>
</template>

    <script lang="ts">
import { GET_HAKKIMIZDA } from "~/queries/query.js";
import { useContents } from "~/queries/queryOperations";
import { state } from "~/store/index";
export default {
  async asyncData({ app, route }) {
    state.page = route.name;
    const result = await useContents(app, GET_HAKKIMIZDA);
    const data = result.hakkimizdaCollection.items[0];
    return { data };
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
