<template>
  <div class="topnav">
    <div class="logo">Logo</div>
    <ul class="menu">
      <li>menu1</li>
      <li>menu2</li>
    </ul>
    <span
      class="toggleAsideMenu"
      @click="toggleAside"
    ></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  name: "TopNav",
  setup() {
    const asideVi = inject<Ref<boolean>>("asideVi");
    const toggleAside = () => {
      asideVi.value = !asideVi.value;
    };
    return {
      toggleAside,
    };
  },
  data() {
    return {};
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
    background-color: red;
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
