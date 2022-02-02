<template>
  <div>
    <ul class="urun-link-container">
      <UrunLink
        v-for="urun in data"
        :key="urun.slug"
        :urun="urun"
        content="ev-dekorasyon"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { GET_ALL_EV_DEKORASYON } from "~/queries/query.js";
import { useContents } from "~/queries/queryOperations";
export default {
  async asyncData({ app }: { app: any }) {
    const result = await useContents(app, GET_ALL_EV_DEKORASYON);
    const data: [
      {
        baslik: string;
        resimlerCollection: { items: [{ url: string }] };
        slug: string;
      }
    ] = result.evDekorasyonCollection.items;
    return {data}
  },

  head: {
    title: "Nar Hali ve Perde | Ev Dekorasyonu",
    meta: [
      {
        hid: "description",
        name: "Ev Dekorasyon Ürünleri ",
        content: `En Sevilen Ev Dekorasyon Ürünleri, Post, Kilim ve Pelus Modelleri Nar Hali ve Perde’de!`,
      },
    ],
  },
};
</script>
<style lang="scss" scoped>
@import "~/static/main";
</style>
