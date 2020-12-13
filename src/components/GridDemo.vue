<template>
  <Demo :component="GridDemo1" />
  <Demo :component="GridDemo2" />
  <Demo :component="GridDemo3" />
  <Demo :component="GridDemo4" />
</template>

<script lang='ts'>
import Demo from "./Demo.vue";
import GridDemo1 from "./demos/Grid.demo1.vue";
import GridDemo2 from "./demos/Grid.demo2.vue";
import GridDemo3 from "./demos/Grid.demo3.vue";
import GridDemo4 from "./demos/Grid.demo4.vue";
export default {
  setup() {
    return { GridDemo1, GridDemo2, GridDemo3, GridDemo4 };
  },
  components: { Demo },
};
</script>

<style lang="scss" scoped>
</style>