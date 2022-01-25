<template>
  <Urun />
</template>
<script lang="ts">
import { defineComponent, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {},
  head() {
    return {
      title: "title",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "some page description",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~/static/main";
</style>
