<template>
  <Demo :component="ToastDemo1" />
  <Demo :component="ToastDemo2" />
  <Demo :component="ToastDemo3" />
  <Demo :component="ToastDemo4" />
  <Demo :component="ToastDemo5" />
</template>
<script lang="ts">
import Demo from "/src/components/Demo.vue";
import ToastDemo1 from "/src/components/demos/toast/Toast.demo1.vue";
import ToastDemo2 from "/src/components/demos/toast/Toast.demo2.vue";
import ToastDemo3 from "/src/components/demos/toast/Toast.demo3.vue";
import ToastDemo4 from "/src/components/demos/toast/Toast.demo4.vue";
import ToastDemo5 from "/src/components/demos/toast/Toast.demo5.vue";
export default {
  components: { Demo },
  setup() {
    return { ToastDemo1, ToastDemo2, ToastDemo3, ToastDemo4, ToastDemo5 };
  },
};
</script>
<style lang="scss" scoped></style>
