<template>
  <h1>Grid 栅格 示例</h1>
  <Demo :component="GridDemo1" />
  <Demo :component="GridDemo2" />
  <Demo :component="GridDemo3" />
  <Demo :component="GridDemo4" />
  <BottomNav
    leftJump='/doc/input'
    rightJump='/doc/layout'
  />
</template>
<script lang='ts'>
import Demo from "/src/components/Demo.vue";
import GridDemo1 from "/src/components/demos/Grid.demo1.vue";
import GridDemo2 from "/src/components/demos/Grid.demo2.vue";
import GridDemo3 from "/src/components/demos/Grid.demo3.vue";
import GridDemo4 from "/src/components/demos/Grid.demo4.vue";
import BottomNav from "/src/components/BottomNav.vue";
export default {
  setup() {
    return { GridDemo1, GridDemo2, GridDemo3, GridDemo4 };
  },
  components: { Demo, BottomNav },
};
</script>
<style lang="scss" scoped>
</style>