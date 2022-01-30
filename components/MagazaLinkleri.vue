<template>
  <div>
    <h2>MAGAZALARIMIZ</h2>
    <ul>
      <li
        v-for="magaza in magazalar.magazalarimizCollection.items"
        :key="magaza.slug"
      >
        <nuxt-link :to="'/magazalarimiz/' + magaza.slug">
          <img
            :src="magaza.resimlerCollection.items[0].url"
            alt="hali resimleri"
          />
          <section>
            <h3>{{ magaza.baslik }}</h3>
          </section>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: ["magazalar"],
});
</script>

<style lang="scss" scoped>
@import "~/static/main";
h2 {
  text-align: center;
}
ul {
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  align-items: center;
  justify-content: center;
  li {
    width: 25rem;
    list-style: none;
    margin: 1rem;
    a {
      text-decoration: none;
      section {
        margin: 1rem;
        h3 {
          color: black;
          text-align: center;
        }
      }
    }
  }
}
img {
  width: 25rem;
}
</style>
