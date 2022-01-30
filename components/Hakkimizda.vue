<template>
  <div>
    <h1>{{ hakkimizda.baslik }}</h1>
    <p>{{ hakkimizda.aciklama }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: ["hakkimizda"],
});
</script>
<style lang="scss" scoped>
@import "~/static/main";
</style>
