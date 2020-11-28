<template>
  <Demo :component="InputDemo1" />
  <Demo :component="InputDemo2" />
  <Demo :component="InputDemo3" />
  <BottomNav
    leftJump='/doc/tabs'
    rightJump=''
  />
</template>
<script lang='ts'>
import Demo from "/src/components/Demo.vue";
import BottomNav from "/src/components/BottomNav.vue";
import InputDemo1 from "/src/components/demos/Input.demo1.vue";
import InputDemo2 from "/src/components/demos/Input.demo2.vue";
import InputDemo3 from "/src/components/demos/Input.demo3.vue";
export default {
  name: "InputDemo",
  setup() {
    return { InputDemo1, InputDemo2, InputDemo3 };
  },
  components: { Demo, BottomNav },
};
</script>

<style lang="scss" scoped>
</style>