<template>
  <div class="urun-link-container">
    <Hakkimizda :hakkimizda="data" />
  </div>
</template>

<script lang="ts">
import { GET_HAKKIMIZDA } from "~/queries/query.js";
import { useContents } from "~/queries/queryOperations";

export default {
  async asyncData({ app, route, store }: { app: any; route: any; store: any }) {
    store.commit("SET_PAGE", route.name);
    const result = await useContents(app, GET_HAKKIMIZDA);
    const data: [
      {
        baslik: string;
        aciklama: string;
        resimlerCollection: { items: [{ url: string }] };
        slug: string;
      }
    ] = result.hakkimizdaCollection.items[0];
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
