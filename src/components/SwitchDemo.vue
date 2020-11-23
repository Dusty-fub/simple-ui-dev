<template>
  <h1>Switch 组件示例</h1>
  <Demo :component="SwitchDemo1" />
  <Demo :component="SwitchDemo2" />
</template>

<script lang="ts">
import Demo from "/@/components/Demo.vue";
import SwitchDemo1 from "./demos/Switch.demo1.vue";
import SwitchDemo2 from "./demos/Switch.demo2.vue";

export default {
  name: "SwitchDemo",
  setup() {
    return {
      SwitchDemo1,
      SwitchDemo2,
    };
  },
  components: { Demo },
};
</script>

<style lang="scss" scoped>
</style>
