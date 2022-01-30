<template>
  <li>
    <nuxt-link :to="`/${urun.slug}`">
      <img :src="urun.resimlerCollection.items[0].url" alt="urun resmi" />
      <h3>{{ urun.baslik }}</h3>
    </nuxt-link>
  </li>
</template>
    <script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: ["urun"],
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "~/static/main";

li {
  width: 25rem;
  list-style: none;
  margin: 1rem;
  a {
    text-decoration: none;

    h3 {
      color: black;
    }
    p {
      margin-top: 1rem;
      color: red;
    }
  }
}

img {
  width: 25rem;
  height: 31.25rem;
}
</style>
