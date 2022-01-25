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

<script >
import {  defineComponent, toRefs } from "@nuxtjs/composition-api";
export default defineComponent({
  props: ["error"],

  setup(props) {
    const name = "EmptyLayout";
    const layout = "empty";
    const pageNotFound = "404 Not Found";
    const otherError = "An error occurred";

    console.log(props);
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
