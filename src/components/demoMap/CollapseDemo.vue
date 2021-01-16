<template>
  <h1>
    Collapse折叠面板 示例
  </h1>
  <Demo :component="CollapseDemo1"></Demo>
  <Demo :component="CollapseDemo2"></Demo>
  <bottom-nav leftJump='/doc/popover' />
</template>
<script lang="ts">
import Demo from "/src/components/Demo.vue";
import CollapseDemo1 from "/src/components/demos/collapse/collapse.demo1.vue";
import CollapseDemo2 from "/src/components/demos/collapse/collapse.demo2.vue";
import BottomNav from "/src/components/BottomNav.vue";
export default {
  components: { Demo, BottomNav },
  setup() {
    return { CollapseDemo1, CollapseDemo2 };
  },
};
</script>
<style lang="scss" scoped></style>
