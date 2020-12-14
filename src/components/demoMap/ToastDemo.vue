<template>
  <Demo :component="ToastDemo1" />
</template>
<script lang="ts">
import Demo from "/src/components/Demo.vue";
import ToastDemo1 from "/src/components/demos/toast/Toast.demo1.vue";
export default {
  components: { Demo },
  setup() {
    return { ToastDemo1 };
  },
};
</script>
<style lang="scss" scoped></style>
