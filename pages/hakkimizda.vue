<template>
  <div>
    <ul>
      <Hakkimizda :hakkimizda="data" />
    </ul>
  </div>
</template>

<script lang="ts">
import { GET_HAKKIMIZDA } from "~/queries/query.js";
import { useContents } from "~/queries/queryOperations";
export default {
  async asyncData({ app }) {
    const result = await useContents(app, GET_HAKKIMIZDA);
    const data = result.hakkimizdaCollection.items[0];
    return { data };
  },

  head: {
    title: "title",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "some page description",
      },
    ],
  },
};
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
