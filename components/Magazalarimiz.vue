<template>
  <main>
    <h1>{{ magaza.baslik }}</h1>
    <address>
      <p>{{ magaza.adres }}</p>
      <!-- <p>
        <strong><a href="tel:+905442385734">+90 544 238 57 34</a></strong>
      </p> -->
      <p>
        <strong
          ><a
            target="_blank"
            href="https://www.google.com/maps/dir/47.1374404,8.5803388/nar+hali+narlidere/@42.8855227,10.0579866,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14bbdcdd28607fbb:0x3c9e647491c412f4!2m2!1d27.0060304!2d38.3945768"
            >Yol Tarifi</a
          ></strong
        >
      </p>
    </address>
    <section>
      <img
        v-for="resim in magaza.resimler"
        :key="resim.fields.file.url"
        :src="resim.fields.file.url"
        alt="magaza resimleri"
      />
    </section>
  </main>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "@nuxtjs/composition-api";
export default defineComponent({
  props: ["magaza"],
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "~/static/main";
main * {
  text-align: center;
}
table {
  margin: 1rem auto;
}
p {
  margin: 1rem;
}
address {
  font-style: normal;
}
img {
  width: 25rem;
}
</style>
