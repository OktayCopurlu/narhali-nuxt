<template>
  <ul>
    <p v-for="hali in halilar" :key="hali.title">{{ hali.title }}</p>
    <li>
      <nuxt-link :to="'/hali-modeli'">
        <img :src="resim1 + 1" alt="hali resimleri" />
        <section>
          <h3>Hali Modeli Ornek : Pier Cardin - Soft</h3>
          <p><strong>Fiyat Ornek : 1050 TL</strong></p>
        </section>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/hali'">
        <img :src="resim1 + 2" alt="hali resimleri" />
        <section>
          <h3>Hali Modeli Ornek : Pier Cardin - Soft</h3>
          <p><strong>Fiyat Ornek : 1050 TL</strong></p>
        </section>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/hali'">
        <img :src="resim1 + 3" alt="hali resimleri" />
        <section>
          <h3>Hali Modeli Ornek : Pier Cardin - Soft</h3>
          <p><strong>Fiyat Ornek : 1050 TL</strong></p>
        </section>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/hali'">
        <img :src="resim1 + 4" alt="hali resimleri" />
        <section>
          <h3>Hali Modeli Ornek : Pier Cardin - Soft</h3>
          <p><strong>Fiyat Ornek : 1050 TL</strong></p>
        </section>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/hali'">
        <img :src="resim1 + 5" alt="hali resimleri" />
        <section>
          <h3>Hali Modeli Ornek : Pier Cardin - Soft</h3>
          <p><strong>Fiyat Ornek : 1050 TL</strong></p>
        </section>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/hali'">
        <img :src="resim1 + 6" alt="hali resimleri" />
        <section>
          <h3>Hali Modeli Ornek : Pier Cardin - Soft</h3>
          <p><strong>Fiyat Ornek : 1050 TL</strong></p>
        </section>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/hali'">
        <img :src="resim1 + 7" alt="hali resimleri" />
        <section>
          <h3>Hali Modeli Ornek : Pier Cardin - Soft</h3>
          <p><strong>Fiyat Ornek : 1050 TL</strong></p>
        </section>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/hali'">
        <img :src="resim1 + 8" alt="hali resimleri" />
        <section>
          <h3>Hali Modeli Ornek : Pier Cardin - Soft</h3>
          <p><strong>Fiyat Ornek : 1050 TL</strong></p>
        </section>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="'/hali'">
        <img :src="resim1 + 9" alt="hali resimleri" />
        <section>
          <h3>Hali Modeli Ornek : Pier Cardin - Soft</h3>
          <p><strong>Fiyat Ornek : 1050 TL</strong></p>
        </section>
      </nuxt-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "@nuxtjs/composition-api";
export default defineComponent({
  props: ["halilar"],
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
ul {
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  align-items: center;
  justify-content: center;
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
}
img {
  width: 25rem;
}
</style>
