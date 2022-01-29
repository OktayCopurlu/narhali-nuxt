<template>
  <MagazaLinkleri :magazalar="data" />
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  useContext,
  useFetch,
} from "@nuxtjs/composition-api";
import { GET_ALL_MAGAZA } from "~/queries/query";

export default defineComponent({
  setup() {
    const data = ref();

    const context = useContext();

    const { fetch } = useFetch(async () => {
      const grapClient = context.app?.apolloProvider.defaultClient;
      const result = await grapClient.query({
        query: GET_ALL_MAGAZA,
      });
      data.value = result.data.magazaCollection.items;
    });
    fetch();
    return {
      data,
    };
  },
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
