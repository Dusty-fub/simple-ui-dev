<template>
  <div class="topnav">
    <router-link
      class="logo"
      to='/home'
    >
      <svg class="icon">
        <use xlink:href="#icon-rhombus"></use>
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
  display : flex;
  padding : 16px;
  position : relative;
  justify-content : center;
  align-items : center;
  background-color : #7680C2;
  box-shadow : 0px .2px 9px hsl(90, 0%, 50%);
  z-index : 10;

  > .logo {
    max-width : 6em;
    margin-right : auto;
    position : relative;

    .icon {
      position : absolute;
      bottom : -1em;
      width : 2em;
      height : 2em;
      transform : translateX(-50%);
    }
  }

  > .menu {
    display : flex;
    white-space : nowrap;
    flex-wrap : nowrap;

    > li {
      margin : 0 1em;
      a {
        text-decoration : none;
      }
      a:hover {
        color : #FCC5BA;
      }
    }
  }

  > .toggleAsideMenu {
    display : none;
    width : 24px;
    height : 24px;
    position : absolute;
    left : 16px;
    top : 50%;
    transform : translateY(-50%);
    .icon {
      width : 24px;
      height : 24px;
    }
  }

  @media (max-width: 500px) {
    & {
      padding : 1.6em 0;
    }
    > .menu {
      display : none;
    }

    > .logo {
      margin : 0 auto;
    }

    > .toggleAsideMenu {
      display : inline-block;
    }
  }
}

</style>
