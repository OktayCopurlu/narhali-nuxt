<template>
  <div>
    <YeniCikanlar />
    <ul class="urun-link-container">
      <UrunLink v-for="urun in data" :key="urun.slug" :urun="urun" />
    </ul>
  </div>
</template>
<script lang="ts">
import { GET_ALL_MAGAZALAR } from "~/queries/query";
import { useContents } from "~/queries/queryOperations";
export default {
 async asyncData({ app, route, store }: { app: any; route: any; store: any }) {
    store.commit("SET_PAGE", "magazalarimiz");
    const result = await useContents(app, GET_ALL_MAGAZALAR);
    const data: [
      {
        baslik: string;
        resimlerCollection: { items: [{ url: string }] };
        slug: string;
      }
    ] = result.magazalarimizCollection.items;
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
@import "~static/main";
</style>
