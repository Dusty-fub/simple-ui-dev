<template>
  <Demo :component="LayoutDemo1" />
  <Demo :component="LayoutDemo2" />
</template>

<script lang='ts'>
import Demo from "./Demo.vue";
import LayoutDemo1 from "./demos/Layout.demo1.vue";
import LayoutDemo2 from "./demos/Layout.demo2.vue";
export default {
  setup() {
    return { LayoutDemo1, LayoutDemo2 };
  },
  components: { Demo },
};
</script>

<style lang="scss" scoped>
</style>