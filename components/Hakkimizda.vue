<template>
  <main>
    <h1>{{ hakkimizda.baslik }}</h1>
    <div class="rich-text" v-html="CONTENT"></div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default defineComponent({
  props: {
    hakkimizda: { type: Object, required: true },
  },
  setup(props) {
    const CONTENT = documentToHtmlString(props.hakkimizda.aciklama.json);
    return { CONTENT };
  },
});
</script>
<style lang="scss" scoped>
@import '~/static/main';
</style>
