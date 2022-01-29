<template>
  <div>
    <YeniCikanlar />
    <MagazaLinkleri :magazalar="data" />
  </div>
</template>
<script>
import {
  defineComponent,
  computed,
  ref,
  useContext,
  useFetch,
} from "@nuxtjs/composition-api";
import { GET_ALL_MAGAZA } from "~/queries/query";

export default defineComponent({
  head() {
    return {
      title: "title",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Some more info",
        },
      ],
    };
  },
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
    return {};
  },
});
</script>
<style lang="sass"></style>
