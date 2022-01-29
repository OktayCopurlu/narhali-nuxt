<template>
  <Urun :urun="data" />
</template>
<script lang="ts">
import {
  defineComponent,
  useFetch,
  ref,
  useRoute,
} from "@nuxtjs/composition-api";
import { getContent } from "~/queries/queryOperations";

export default defineComponent({
  setup() {
    const data = ref();
    const route = useRoute();
    const pageRoute = route.value.path.substring(1);
    const { fetch } = useFetch(async () => {
      const result = await getContent("hali", pageRoute);
      data.value = result.items[0].fields;
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
