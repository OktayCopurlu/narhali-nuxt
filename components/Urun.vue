<template>
  <main>
    <section class="product-information">
      <img :src="resim1 + 10" alt="hali resimi" />
      <div>
        <h1>Urun adi ve modeli</h1>
        <p>
          Aciklama Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
          nobis dolore. Ad repellendus itaque provident sunt dolores aut ea
          architecto est optio nisi neque in, repellat possimus quibusdam rem
          amet.
        </p>
        <table>
          <tr>
            <th>Urun Ebatlari</th>
          </tr>
          <tr>
            <td>80 x 150</td>
          </tr>
          <tr>
            <td>80 x 300</td>
          </tr>
          <tr>
            <td>100 x 200</td>
          </tr>
          <tr>
            <td>100 x 300</td>
          </tr>
          <tr>
            <td>120 x 180</td>
          </tr>
          <tr>
            <td>160 x 180</td>
          </tr>
          <tr>
            <td>200 x 290</td>
          </tr>
        </table>
      </div>
    </section>

    <section class="images-section">
      <img :src="resim1" alt="magaza resimleri" />
      <img :src="resim1 + 1" alt="magaza resimleri" />
      <img :src="resim1 + 2" alt="magaza resimleri" />
      <img :src="resim1 + 3" alt="magaza resimleri" />
      <img :src="resim1 + 4" alt="magaza resimleri" />
    </section>
  </main>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "@nuxtjs/composition-api";
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
.product-information {
  display: flex;
  width: 90vw;
  justify-content: center;
  margin: 1rem auto;
  img {
    width: 35rem;
  }
  div {
    width: 35rem;
    margin-left: 1rem;
    * {
      margin: 1rem;
    }
  }
}
.images-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    margin: 1rem;
    width: 30rem;
  }
}
</style>
