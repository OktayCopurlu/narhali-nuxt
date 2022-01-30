<template>
  <div>
    <ul class="urun-link-container">
      <UrunLink v-for="urun in data" :key="urun.slug" :urun="urun" content="perdeler"/>
    </ul>
  </div>
</template>

<script lang="ts">
import { GET_ALL_PERDE } from "~/queries/query.js";
import { useContents } from "~/queries/queryOperations";

export default {
  async asyncData({ app }: { app: any }) {
    const result = await useContents(app, GET_ALL_PERDE);
    const data: [
      {
        baslik: string;
        resimlerCollection: { items: [{ url: string }] };
        slug: string;
      }
    ] = result.perdelerCollection.items;
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
