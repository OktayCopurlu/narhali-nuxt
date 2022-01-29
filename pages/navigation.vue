<template>
  <Navigation />
</template>

<script>
import { defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
  head() {
    return {
      title: "Navigation",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Navigation",
        },
      ],
    };
  },
  setup() {
    return {};
  },
});
</script>
<style lang="sass"></style>
