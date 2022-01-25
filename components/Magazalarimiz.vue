<template>
  <main>
    <h1>NARLIDERE HALI VE PERDE MAGAZAMIZ</h1>
    <address>
      <p>Narlı Mah., Mithatpaşa Cd. 230/A, 35320 Narlıdere/İzmir, Türkiye</p>
      <p>
        <strong><a href="tel:+905442385734">+90 544 238 57 34</a></strong>
      </p>
      <p>
        <strong
          ><a
            target="_blank"
            href="https://www.google.com/maps/dir/47.1374404,8.5803388/nar+hali+narlidere/@42.8855227,10.0579866,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14bbdcdd28607fbb:0x3c9e647491c412f4!2m2!1d27.0060304!2d38.3945768"
            >Yol Tarifi</a
          ></strong
        >
      </p>
      <h3>Calisma Saatlerimiz</h3>

      <table>
        <tr>
          <td>Pazartesi</td>
          <td>09:00–20:00</td>
        </tr>
        <tr>
          <td>Sali</td>
          <td>09:00–20:00</td>
        </tr>
        <tr>
          <td>Carsamba</td>
          <td>09:00–20:00</td>
        </tr>
        <tr>
          <td>Persembe</td>
          <td>09:00–20:00</td>
        </tr>
        <tr>
          <td>Cuma</td>
          <td>09:00–20:00</td>
        </tr>
        <tr>
          <td>Cumartesi</td>
          <td>09:00–20:00</td>
        </tr>
      </table>
    </address>
    <section>
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
