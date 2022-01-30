<template>
  <Urun :urun="data" />
</template>
<script lang="ts">
import { useContent } from "~/queries/queryOperations";
import { state } from "~/store/index";

export default {
  async asyncData({ params }: { params: any }) {
    const pageRoute = params.slug as string;
    const result = await useContent(state.page, pageRoute);
    const data: {
      baslik: string;
      adres: string;
      resimler: [any];
      slug: string;
    } = result as {
      baslik: string;
      adres: string;
      resimler: [any];
      slug: string;
    };
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
