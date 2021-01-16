<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";

export default {
  name: "App",

  setup() {
    const asideVisible = ref(true);

    window.onresize = function () {
      asideVisible.value = document.documentElement.clientWidth > 500;
    };

    provide("asideVi", asideVisible);
  },
};
</script>
