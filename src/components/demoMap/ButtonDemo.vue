<template>
  <h1>Button 组件示例</h1>
  <Demo :component="ButtonDemo1" />
  <Demo :component="ButtonDemo2" />
  <Demo :component="ButtonDemo3" />
  <Demo :component="ButtonDemo4" />
  <Demo :component="ButtonDemo5" />
  <Demo :component="ButtonDemo6" />
  <Demo :component="ButtonDemo7" />
  <BottomNav
    leftJump='/doc/switch'
    rightJump='/doc/dialog'
  />
</template>

<script>
import Demo from "/src/components/Demo.vue";
import BottomNav from "/src/components/BottomNav.vue";
import ButtonDemo1 from "/src/components/demos/Button.demo1.vue";
import ButtonDemo2 from "/src/components/demos/Button.demo2.vue";
import ButtonDemo3 from "/src/components/demos/Button.demo3.vue";
import ButtonDemo4 from "/src/components/demos/Button.demo4.vue";
import ButtonDemo5 from "/src/components/demos/Button.demo5.vue";
import ButtonDemo6 from "/src/components/demos/Button.demo6.vue";
import ButtonDemo7 from "/src/components/demos/Button.demo7.vue";

export default {
  name: "ButtonDemo",
  setup() {
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      ButtonDemo5,
      ButtonDemo6,
      ButtonDemo7,
    };
  },
  components: { Demo, BottomNav },
};
</script>