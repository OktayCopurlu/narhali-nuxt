<template>
  <v-footer padless>
    <v-card
      class="flex"
      flat
      tile
      style="background-color: gray; border-radius: 0; color: white"
    >
      <v-card-title class="teal">
        <strong class="subheading"
          >Sosyal medyada magazamizi ziyaret edin!</strong
        >

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <a class="light" href="https://www.instagram.com/narhaliperde1/" target="_blank">
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-title>

      <v-card-text class="p-0 white--text text-center footer">
        <span class="light"> {{ new Date().getFullYear() }} —</span>
        <strong class="light">Oktay</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const state = reactive({
      icons: ["mdi-facebook", "mdi-instagram"],
    });

  
    return { ...toRefs(state) };
  },
});
</script>

<style lang="scss">
@import "~/static/main";
a {
  text-decoration: none;
}
.footer {
  text-align: center;
  padding: 0 0 1rem 0;
}
</style>

