<template>
  <main>
    <section class="product-information">
      <img :src="urun.resimler[0].fields.file.url" :alt="urun.baslik" />
      <div>
        <h1>{{ urun.baslik }}</h1>
        <p>
          {{ urun.aciklama }}
        </p>
        <table>
          <tr>
            <th>Urun Ebatlari</th>
          </tr>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </section>

    <section class="images-section">
      <img
        v-for="resim in urun.resimler"
        :key="resim.fields.file.url"
        :src="resim.fields.file.url"
        alt="magaza resimleri"
      />
    </section>
  </main>
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
