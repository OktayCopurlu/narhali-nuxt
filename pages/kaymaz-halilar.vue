<template>
  <div>
    <ul class="urun-link-container">
      <UrunLink v-for="urun in data" :key="urun.slug" :urun="urun" />
    </ul>
  </div>
</template>

<script lang="ts">
import { GET_ALL_KAYMAZ_HALI } from "~/queries/query.js";
import { useContents } from "~/queries/queryOperations";
import { state } from "~/store/index";
export default {
  async asyncData({ app, route }) {
    state.page = route.name;
    const result = await useContents(app, GET_ALL_KAYMAZ_HALI);
    const data = result.kaymazHalilarCollection.items;
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
