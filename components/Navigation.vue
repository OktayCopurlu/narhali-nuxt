<template>
  <nav :style="`background-image: url(${resim})`">
    <label class="large-display-none position-fixed-top" for="bar"
      ><i class="fas fa-bars"></i></label
    ><input type="checkbox" name="bar" id="bar" />

    <ul :class="navbarPosition">
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
    const state: {
      navbarPosition: null | string;
      navList: { link: string; text: string }[];
    } = reactive({
      navbarPosition: null,
      navList: [
        {
          link: "/",
          text: "Ana Sayfa",
        },
        {
          link: "/hakkimizda",
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
    if (process.client) {
      window.onscroll = () => {
        if (window.pageYOffset > 314) {
          state.navbarPosition = "position-fixed-top";
        } else {
          state.navbarPosition = " ";
        }
      };
    }
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss" scoped>
@import "~/static/main";
nav {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  min-height: 23rem;
  #bar {
    display: none;
  }
  label {
    font-size: 1.7rem;
    color: black;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: rgba(250, 250, 250, 0.5);
    border-radius: 0 0 20%;
  }

  ul {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding-top: 1rem;

    li {
      margin-bottom: 1rem;
      list-style: none;

      a {
        font-size: 1.8vw;
        color: white;
        text-decoration: none;
        &::after {
          display: block;
          content: "";
          width: 0;
          height: 2px;
          background-color: white;
          transition: all 0.2s ease;
        }

        &:hover {
          color: darken($color: white, $amount: 10);
          text-decoration-color: darken($color: white, $amount: 20);
          &::after {
            display: block;
            content: "";
            width: 100%;
            height: 2px;
            background-color: darken($color: white, $amount: 20);
            transition: all 0.2s ease;
          }
        }
      }
    }
  }
  .position-fixed-top {
    position: fixed;
    bottom: auto;
    background: rgba(0, 0, 0, 0.7);
  }
  @media #{$media-tablet} {
    ul {
      display: block;
      transform: translateX(-200px);
      transition: all 0.2s linear;
      padding: 0 1rem 0 1rem;
      width: auto;
      position: fixed;
      bottom: auto;
      top: 3rem;
      border-radius: 0 1rem 0 0;

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
