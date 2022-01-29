<template>
  <nav :style="`background-image: url(${resim})`">
    <label class="large-display-none" for="bar"
      ><i class="fas fa-bars"></i></label
    ><input type="checkbox" name="bar" id="bar" />

    <ul>
      <li v-for="element in navList" :key="element.link">
        <nuxt-link :to="element.link"> {{ element.text }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@nuxtjs/composition-api";
export default defineComponent({
  props: ["resim"],
  setup() {
    const state = reactive({
      navList: [
        {
          link: "/",
          text: "Ana Sayfa",
        },
        {
          link: "/hakkinda",
          text: "Hakkimizda",
        },
        {
          link: "/halilar",
          text: "Halilar",
        },
        {
          link: "/perdeler",
          text: "Perdeler",
        },
        {
          link: "/yataklar",
          text: "Yataklar",
        },
        {
          link: "/kaymaz-halilar",
          text: "Kaymaz Halilar",
        },
        {
          link: "/ev-dekorasyon",
          text: "Ev Dekorasyon",
        },
        {
          link: "/magazalarimiz",
          text: "Magazalarimiz",
        },
      ],
    });
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss" scoped>
@import "~/static/main";
nav {
  // background-image: url("https://picsum.photos/1920/1080?random");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 20rem;
  // display: flex;
  // align-items: flex-end;
  // div {
  //   width: 100%;
  // }
  #bar {
    display: none;
  }
  label {
    font-size: 1.7rem;
    color: white;
    cursor: pointer;
    padding: 1rem;
  }
  // .background {
  //   background-color: gray;
  //   width: 100%;
  //   opacity: 0.5;
  //   height: 3rem;
  //   position: absolute;
  // }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 20rem;

    li {
      margin-bottom: 1rem;
      list-style: none;

      a {
        font-size: 1.8vw;
        color: white;
        text-decoration: none;

        &:hover {
          color: darken($color: white, $amount: 10);
          text-decoration: underline;
          text-decoration-color: darken($color: white, $amount: 20);
        }
      }
    }
  }
  @media #{$media-tablet} {
    ul {
      display: block;
      transform: translateX(-200px);
      transition: all 0.2s linear;
      padding-left: 1rem;
      li {
        margin-top: 0.3rem;
        list-style: none;
        a {
          font-size: 1.2rem;
          color: white;
          text-decoration: none;
        }
      }
    }

    #bar:checked ~ ul {
      transform: translateX(0px);
      transition: all 0.2s linear;
    }
  }
}
</style>
