<template>
  <Urun :urun="data" content="perdeler" />
</template>
<script lang="ts">
import { useContent } from "~/queries/queryOperations";
export default {
  async asyncData({ params }: { params: any }) {
    const pageRoute = params.slug as string;
    const result = await useContent("perdeler", pageRoute);
    const data: {
      baslik: string;
      aciklama: string;
      resimler: [any];
      slug: string;
    } = result as {
      baslik: string;
      aciklama: string;
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
