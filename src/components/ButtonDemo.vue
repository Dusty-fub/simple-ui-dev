<template>
  <Demo :component="ButtonDemo1" />
  <Demo :component="ButtonDemo2" />
  <Demo :component="ButtonDemo3" />
  <Demo :component="ButtonDemo4" />
  <Demo :component="ButtonDemo5" />
  <Demo :component="ButtonDemo6" />
  <BottomNav
    leftJump='/doc/switch'
    rightJump='/doc/dialog'
  />
</template>

<script>
import Demo from "/@/components/Demo.vue";
import BottomNav from "/@/components/BottomNav.vue";
import ButtonDemo1 from "/@/components/demos/Button.demo1.vue";
import ButtonDemo2 from "/@/components/demos/Button.demo2.vue";
import ButtonDemo3 from "/@/components/demos/Button.demo3.vue";
import ButtonDemo4 from "/@/components/demos/Button.demo4.vue";
import ButtonDemo5 from "/@/components/demos/Button.demo5.vue";
import ButtonDemo6 from "/@/components/demos/Button.demo6.vue";

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
    };
  },
  components: { Demo, BottomNav },
};
</script>
