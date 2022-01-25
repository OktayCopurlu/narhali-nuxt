<template>
  <div>
    <h2>MAGAZALARIMIZ</h2>
    <ul>
      <li>
        <nuxt-link :to="'/magazalarimiz/hali'">
          <img :src="resim1 + 1" alt="hali resimleri" />
          <section>
            <h3>Hali ve Perde Magazamiz</h3>
          </section>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/magazalarimiz/yatak'">
          <img :src="resim1 + 2" alt="hali resimleri" />
          <section>
            <h3>Yatak Magazamiz</h3>
          </section>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const resim1 = computed(() => {
      return `https://picsum.photos/1920/1080?2`;
    });

    return {
      resim1,
    };
  },
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
