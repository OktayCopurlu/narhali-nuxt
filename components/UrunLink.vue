<template>
  <li>
    <nuxt-link :to="`/${urun.slug}`">
      <img :src="urun.resimlerCollection.items[0].url" alt="urun resmi" />
      <section>
        <h3>{{ urun.baslik }}</h3>
      </section>
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
  border: 1px solid gray;
  width: 25rem;
  list-style: none;
  margin: 1rem;
  a {
    text-decoration: none;
    section {
      margin: 1rem;
      h3 {
        color: black;
      }
      p {
        margin-top: 1rem;
        color: red;
      }
    }
  }
}

img {
  width: 25rem;
}
</style>
