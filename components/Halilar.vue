<template>
  <li>
    <nuxt-link :to="'/' + hali.slug">
      <img :src="hali.resimlerCollection.items[0].url" alt="hali resmi" />
      <section>
        <h3>{{ hali.baslik }}</h3>
      </section>
    </nuxt-link>
  </li>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "@nuxtjs/composition-api";
export default defineComponent({
  props: ["hali"],
  setup(props) {
    console.log(props);
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
