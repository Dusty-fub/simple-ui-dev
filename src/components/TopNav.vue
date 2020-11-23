<template>
  <div class="topnav">
    <router-link
      class="logo"
      to='/home'
    >
      <svg class="icon">
        <use xlink:href="#icon-simple-point"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to='/doc'>文档</router-link>
      </li>
    </ul>
    <span
      class="toggleAsideMenu"
      v-if='toggleMenuButtonVisible'
      @click="toggleAside"
    >
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>

    </span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  name: "TopNav",
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVi = inject<Ref<boolean>>("asideVi");
    const toggleAside = () => {
      asideVi.value = !asideVi.value;
    };
    return {
      toggleAside,
    };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: hsl(90, 70%, 60%);
  box-shadow: 0px 0.2px 9px hsl(90, 0%, 50%);
  z-index: 10;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAsideMenu {
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAsideMenu {
      display: inline-block;
    }
  }
}
</style>
