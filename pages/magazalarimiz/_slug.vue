<template>
  <Magazalarimiz :magaza="data" />
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useFetch,
  useRoute,
} from "@nuxtjs/composition-api";
import { getContent } from "~/queries/queryOperations";
export default defineComponent({
  setup() {
    const data = ref();
    const route = useRoute();
    const pageRoute = route.value.path.substring(15);

    const { fetch } = useFetch(async () => {
      const result = await getContent("magaza", pageRoute);
      data.value = result;
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
