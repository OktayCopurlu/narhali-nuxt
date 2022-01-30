<template>
  <div class="main">
    <Navigation :resim="imageURL" />
    <Nuxt />
    <Footer/>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  useFetch,
  ref,
  useContext,
  Ref,
} from "@nuxtjs/composition-api";
import { client } from "~/plugins/contentful.js";
import { GET_ALL_IMAGES_ID } from "~/queries/query.js";
export default defineComponent({
  setup() {
    const imageURL: Ref<string> = ref("");
    const context = useContext();
    const { fetch } = useFetch(async () => {
      const grapClient: any = context.app?.apolloProvider.defaultClient;
      const result: { data: { assetCollection: any } } = await grapClient.query(
        {
          query: GET_ALL_IMAGES_ID,
        }
      );
      const response = await client.getAsset(
        result.data.assetCollection.items[
          Math.floor(Math.random() * result.data.assetCollection.items.length)
        ].sys.id
      );
      imageURL.value = response.fields.file.url;
    });

    fetch();
    return {
      imageURL,
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
.main::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  // background-image: url("https://picsum.photos/1920/1080?6");
  background-size: cover;
  background-position: center;
  opacity: 0.25; /*Value from 0.0 to 1.0*/
}
</style>
