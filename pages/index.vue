<template>
  <div>
    <YeniCikanlar />
  <UrunLink v-for="urun in data" :key="urun.slug" :urun="urun" />
  </div>
</template>
<script lang="ts">
import { GET_ALL_MAGAZALAR } from "~/queries/query";
import { useContents } from "~/queries/queryOperations";
import { state } from "~/store/index";
export default {
  async asyncData({ app, route }) {
    state.page = route.name;
    const result = await useContents(app, GET_ALL_MAGAZALAR);
    const data = result.magazalarimizCollection.items;
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
<style lang="sass"></style>
