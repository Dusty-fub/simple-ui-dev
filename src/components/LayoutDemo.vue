<template>
  <Demo :component="LayoutDemo1" />
  <Demo :component="LayoutDemo2" />
  <Demo :component="LayoutDemo3" />
</template>

<script lang="ts">
import Demo from "/src/components/Demo.vue";
import LayoutDemo1 from "/src/components/demos/layout/Layout.demo1.vue";
import LayoutDemo2 from "/src/components/demos/layout/Layout.demo2.vue";
import LayoutDemo3 from "/src/components/demos/layout/Layout.demo3.vue";
export default {
  components: { Demo },
  setup(props) {
    return { LayoutDemo1, LayoutDemo2, LayoutDemo3 };
  },
};
</script>

<style lang="scss" scoped></style>
