<template>
  <Demo :component="LayoutDemo1" />
  <Demo :component="LayoutDemo2" />
</template>

<script lang="ts">
import Demo from "/src/components/Demo.vue";
import LayoutDemo1 from "/src/components/demos/layout/Layout.demo1.vue";
import LayoutDemo2 from "/src/components/demos/layout/Layout.demo2.vue";
export default {
  components: { Demo },
  setup(props) {
    return { LayoutDemo1, LayoutDemo2 };
  },
};
</script>

<style lang="scss" scoped></style>
