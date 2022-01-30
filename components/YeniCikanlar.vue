<template>
  <main>
    <h2>YENI CIKANLAR</h2>
    <section>
      <button @click="clickLeft"><i class="fas fa-arrow-left"></i></button>
      <ul>
        <li>
          <nuxt-link :to="'/hali'">
            <img :src="resim1" alt="hali resimleri" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/hali'">
            <img :src="resim2" alt="hali resimleri" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="'/hali'">
            <img :src="resim3" alt="hali resimleri" />
          </nuxt-link>
        </li>
      </ul>
      <button @click="clickRight"><i class="fas fa-arrow-right"></i></button>
    </section>
  </main>
</template>
    <script lang="ts">
import { defineComponent, ref, computed } from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const resim = ref(0);

    const resim1 = computed(() => {
      return `https://picsum.photos/1920/1080? + ${resim.value + 1}`;
    });
    const resim2 = computed(() => {
      return `https://picsum.photos/1920/1080? + ${resim.value + 2}`;
    });
    const resim3 = computed(() => {
      return `https://picsum.photos/1920/1080? + ${resim.value + 3}`;
    });

    const clickRight = () => {
      resim.value++;
    };
    const clickLeft = () => {
      resim.value--;
    };
    return {
      clickRight,
      resim1,
      resim2,
      resim3,
      clickLeft,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "~/static/main";
main {
  h2 {
    text-align: center;
    margin-top: 3rem;
  }
  section {
    display: flex;
    justify-content: space-around;
  }
}

ul {
  display: flex;
  width: 69%;
  overflow: hidden;
  li {
    list-style-type: none;
    img {
      width: 100%;
    }
  }
}
</style>
