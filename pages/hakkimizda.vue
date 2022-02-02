<template>
  <div class="urun-link-container">
    <Hakkimizda :hakkimizda="data" />
  </div>
</template>

<script lang="ts">
import { GET_HAKKIMIZDA } from "~/queries/query.js";
import { useContents } from "~/queries/queryOperations";

export default {
  async asyncData({ app }: { app: any }) {
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
    title: "Nar Hali ve Perde Hakkimizda",
    meta: [
      {
        hid: "description",
        name: "Hakkimizda",
        content: "Adres : Narli Mah. Mithatpasa Cd. 238/a Narlidere Izmir",
      },
    ],
  },
};
</script>
<style lang="scss" scoped>
@import "~/static/main";
</style>
