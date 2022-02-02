<template>
  <Urun :urun="data" content="ev-dekorasyon" />
</template>
<script  lang="ts">
import { useContent } from "~/queries/queryOperations";
import { state } from "~/store/index";

export default {
  async asyncData({ params }:{ params: any}) {
    const pageRoute = params.slug;
    const result = await useContent("ev-dekorasyon", pageRoute);
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
    state.value = data;
    return { data };
  },
  head() {
    return {
      title: `Nar Hali ve Perde | ${state.value.baslik}`,
      meta: [
        {
          hid: "description",
          name: state.value.baslik,
          content: "Dijital Baskı Yıkanabilir Kaymaz Taban Salon Halısı Mutfak Halısı Koridor Halısı Post Pelus Hali Dekorasyon Halisi",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/static/main";
</style>
