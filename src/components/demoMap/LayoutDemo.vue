<template>
  <h1>Layout 布局 示例</h1>
  <Demo :component="LayoutDemo1" />
  <Demo :component="LayoutDemo2" />
  <Demo :component="LayoutDemo3" />
  <Demo :component="LayoutDemo4" />
  <Demo :component="LayoutDemo5" />
  <Demo :component="LayoutDemo6" />
  <Demo :component="LayoutDemo7" />
  <Demo :component="LayoutDemo8" />
  <BottomNav
    leftJump='/doc/grid'
    rightJump='/doc/toast'
  />

</template>

<script lang="ts">
import Demo from "/src/components/Demo.vue";
import LayoutDemo1 from "/src/components/demos/layout/Layout.demo1.vue";
import LayoutDemo2 from "/src/components/demos/layout/Layout.demo2.vue";
import LayoutDemo3 from "/src/components/demos/layout/Layout.demo3.vue";
import LayoutDemo4 from "/src/components/demos/layout/Layout.demo4.vue";
import LayoutDemo5 from "/src/components/demos/layout/Layout.demo5.vue";
import LayoutDemo6 from "/src/components/demos/layout/Layout.demo6.vue";
import LayoutDemo7 from "/src/components/demos/layout/Layout.demo7.vue";
import LayoutDemo8 from "/src/components/demos/layout/Layout.demo8.vue";
import BottomNav from "/src/components/BottomNav.vue";
export default {
  components: { Demo, BottomNav },
  setup(props) {
    return {
      LayoutDemo1,
      LayoutDemo2,
      LayoutDemo3,
      LayoutDemo4,
      LayoutDemo5,
      LayoutDemo6,
      LayoutDemo7,
      LayoutDemo8,
    };
  },
};
</script>

<style lang="scss" scoped></style>
