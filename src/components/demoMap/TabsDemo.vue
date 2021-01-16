<template>
  <h1>Tabs 组件 示例</h1>
  <Demo :component='TabsDemo1' />
  <BottomNav
    leftJump='/doc/dialog'
    rightJump='/doc/input'
  />
</template>

<script lang='ts'>
import Demo from "/src/components/Demo.vue";
import BottomNav from "/src/components/BottomNav.vue";
import TabsDemo1 from "/src/components/demos/Tabs.demo1.vue";
export default {
  setup() {
    return { TabsDemo1 };
  },
  components: { Demo, BottomNav },
};
</script>
