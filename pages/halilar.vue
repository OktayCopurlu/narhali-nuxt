<template>
  <div>
    <div v-for="hali in data.data.getObjects.objects" :key="hali.title">
      <h1>{{ hali.title }}</h1>
      <p v-html="hali.content"></p>
      <img :src="hali.metadata.images.url" alt="">
    </div>
  </div>
</template>
<script lang="ts">
import {
  useAsync,
  defineComponent,
  useFetch,
  useContext,
  computed,
  ref,
} from "@nuxtjs/composition-api";
import getObjects from "~/queries/getObjects.gql";
export default defineComponent({
  setup() {
    const data = ref();
    const context = useContext();
    const client = context.app?.apolloProvider.defaultClient;

    const { fetch, fetchState } = useFetch(async () => {
      data.value = await client.query({
        query: getObjects,
        fetchPolicy: "network-only",
      });
    });
    fetch();
    console.log(fetchState);

    // const  data  = useAsync(() => {
    //   client.query({
    //     query: getObjects,
    //     fetchPolicy: "network-only",
    //   });
    // });
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
<style lang="scss" scoped></style>
