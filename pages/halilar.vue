<template>
  <div>
    <ul>
      <Halilar v-for="hali in data" :key="hali.slug" :hali="hali" />
    </ul>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  useFetch,
  ref,
  useContext,
} from "@nuxtjs/composition-api";
import {GET_ALL_CARPET} from '~/queries/query.js'
export default defineComponent({
  setup() {
    const data = ref();

    const context = useContext();

    const { fetch } = useFetch(async () => {
      const grapClient = context.app?.apolloProvider.defaultClient;
      const result = await grapClient.query({
        query: GET_ALL_CARPET,
      });
      data.value = result.data.haliCollection.items;
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
ul {
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  align-items: center;
  justify-content: center;
}
</style>
