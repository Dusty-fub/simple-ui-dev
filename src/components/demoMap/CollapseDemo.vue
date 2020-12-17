<template>
  <Demo :component="CollapseDemo1"></Demo>
</template>
<script lang="ts">
import Demo from "/src/components/Demo.vue";
import CollapseDemo1 from "/src/components/demos/collapse/collapse.demo1.vue";
export default {
  components: { Demo },
  setup() {
    return { CollapseDemo1 };
  },
};
</script>
<style lang="scss" scoped></style>
