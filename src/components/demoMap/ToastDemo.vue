<template>
  <h1>Toast 弹框提示 示例</h1>
  <Demo :component="ToastDemo1" />
  <Demo :component="ToastDemo2" />
  <Demo :component="ToastDemo3" />
  <Demo :component="ToastDemo4" />
  <Demo :component="ToastDemo5" />
  <Demo :component="ToastDemo6" />
  <BottomNav
    leftJump='/doc/layout'
    rightJump='/doc/popover'
  />
</template>
<script lang="ts">
import Demo from "/src/components/Demo.vue";
import ToastDemo1 from "/src/components/demos/toast/Toast.demo1.vue";
import ToastDemo2 from "/src/components/demos/toast/Toast.demo2.vue";
import ToastDemo3 from "/src/components/demos/toast/Toast.demo3.vue";
import ToastDemo4 from "/src/components/demos/toast/Toast.demo4.vue";
import ToastDemo5 from "/src/components/demos/toast/Toast.demo5.vue";
import ToastDemo6 from "/src/components/demos/toast/Toast.demo6.vue";
import BottomNav from "/src/components/BottomNav.vue";
export default {
  components: { Demo, BottomNav },
  setup() {
    return {
      ToastDemo1,
      ToastDemo2,
      ToastDemo3,
      ToastDemo4,
      ToastDemo5,
      ToastDemo6,
    };
  },
};
</script>

