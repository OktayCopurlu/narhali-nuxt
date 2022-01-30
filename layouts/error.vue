<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: ["error"],

  setup() {
    const name = "EmptyLayout";
    const layout = "empty";
    const pageNotFound = "404 Not Found";
    const otherError = "An error occurred";
    return {
      name,
      layout,
      pageNotFound,
      otherError,
    };
  },
});
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
