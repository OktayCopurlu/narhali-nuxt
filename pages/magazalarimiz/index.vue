<template>
  <div>
    <ul>
      <UrunLink
        v-for="urun in data"
        :key="urun.slug"
        :urun="urun"
        content="magazalarimiz"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { GET_ALL_MAGAZALAR } from "~/queries/query.js";
import { useContents } from "~/queries/queryOperations";
export default {
  async asyncData({ app, route, store }: { app: any; route: any; store: any }) {
    store.commit("SET_PAGE", route.name);
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
ul {
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  align-items: center;
  justify-content: center;
}
</style>
