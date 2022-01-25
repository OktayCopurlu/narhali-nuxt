<template>
  <div class="main">
    <Navigation />
    <Nuxt />
  </div>
</template>
<script>
import { reactive, defineComponent, toRefs } from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const state = reactive({});
    return {
      ...toRefs(state),
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
.main::before{
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
