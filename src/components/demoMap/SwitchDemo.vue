<template>
  <h1>Switch 组件示例</h1>
  <Demo :component="SwitchDemo1" />
  <Demo :component="SwitchDemo2" />
  <BottomNav rightJump='/doc/button' />
</template>

<script lang="ts">
import Demo from "/src/components/Demo.vue";
import BottomNav from "/src/components/BottomNav.vue";
import SwitchDemo1 from "/src/components/demos/Switch.demo1.vue";
import SwitchDemo2 from "/src/components/demos/Switch.demo2.vue";
export default {
  name: "SwitchDemo",
  setup() {
    return {
      SwitchDemo1,
      SwitchDemo2,
    };
  },
  components: { Demo, BottomNav },
};
</script>
