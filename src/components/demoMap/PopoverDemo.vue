<template>
  <h1>Popover 弹出层 示例</h1>
  <Demo :component="PopoverDemo1" />
  <Demo :component="PopoverDemo2" />
  <BottomNav
    leftJump='/doc/toast'
    rightJump='/doc/collapse'
  />
</template>
<script lang="ts">
import Demo from "/src/components/Demo.vue";
import PopoverDemo1 from "../demos/popover/Popover.demo1.vue";
import PopoverDemo2 from "../demos/popover/Popover.demo2.vue";
import BottomNav from "/src/components/BottomNav.vue";
export default {
  components: { Demo, BottomNav },
  setup() {
    return { PopoverDemo1, PopoverDemo2 };
  },
};
</script>
<style lang="scss" scoped></style>
