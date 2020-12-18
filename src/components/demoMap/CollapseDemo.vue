<template>
  <Demo :component="CollapseDemo1"></Demo>
  <Demo :component="CollapseDemo2"></Demo>
</template>
<script lang="ts">
import Demo from "/src/components/Demo.vue";
import CollapseDemo1 from "/src/components/demos/collapse/collapse.demo1.vue";
import CollapseDemo2 from "/src/components/demos/collapse/collapse.demo2.vue";
export default {
  components: { Demo },
  setup() {
    return { CollapseDemo1, CollapseDemo2 };
  },
};
</script>
<style lang="scss" scoped></style>
