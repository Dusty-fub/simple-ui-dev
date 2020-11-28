<template>
  <Demo :component="InputDemo1" />
  <BottomNav
    leftJump='/doc/tabs'
    rightJump=''
  />
</template>
<script lang='ts'>
import Demo from "/src/components/Demo.vue";
import BottomNav from "/src/components/BottomNav.vue";
import InputDemo1 from "/src/components/demos/Input.demo1.vue";
export default {
  name: "InputDemo",
  setup() {
    return { InputDemo1 };
  },
  components: { Demo, BottomNav },
};
</script>

<style lang="scss" scoped>
</style>