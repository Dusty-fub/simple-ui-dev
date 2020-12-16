<template>
  <Demo :component="ToastDemo1" />
  <Demo :component="ToastDemo2" />
</template>
<script lang="ts">
import Demo from "/src/components/Demo.vue";
import ToastDemo1 from "/src/components/demos/toast/Toast.demo1.vue";
import ToastDemo2 from "/src/components/demos/toast/Toast.demo2.vue";
export default {
  components: { Demo },
  setup() {
    return { ToastDemo1, ToastDemo2 };
  },
};
</script>
<style lang="scss" scoped></style>
