<template>
  <div>
    <ul class="urun-link-container">
      <UrunLink
        v-for="urun in urunler"
        :key="urun.slug"
        :urun="urun"
        content="yataklar"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { GET_ALL_YATAK } from "~/queries/query.js";
import { useContents } from "~/queries/queryOperations";
import { state } from "~/store/index";
export default {
  async asyncData({ app, route }: { app: any; route: any }) {
    const result = await useContents(app, GET_ALL_YATAK);
    const urunler: [
      {
        baslik: string;
        resimlerCollection: { items: [{ url: string }] };
        slug: string;
      }
    ] = result.yataklarCollection.items;
    return { urunler };
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
