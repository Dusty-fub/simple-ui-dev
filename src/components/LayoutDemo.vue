<template>
  <Demo :component="LayoutDemo1" />
  <Demo :component="LayoutDemo2" />
  <Demo :component="LayoutDemo3" />
  <Demo :component="LayoutDemo4" />
</template>

<script lang='ts'>
import Demo from "./Demo.vue";
import LayoutDemo1 from "./demos/Layout.demo1.vue";
import LayoutDemo2 from "./demos/Layout.demo2.vue";
import LayoutDemo3 from "./demos/Layout.demo3.vue";
import LayoutDemo4 from "./demos/Layout.demo4.vue";
export default {
  setup() {
    return { LayoutDemo1, LayoutDemo2, LayoutDemo3, LayoutDemo4 };
  },
  components: { Demo },
};
</script>

<style lang="scss" scoped>
</style>