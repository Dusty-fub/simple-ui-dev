<template>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
  <BottomNav
    leftJump='/doc/button'
    rightJump='/doc/tabs'
  />
</template>

<script lang='ts' >
import Demo from "/@/components/Demo.vue";
import BottomNav from "/@/components/BottomNav.vue";
import DialogDemo1 from "/@/components/demos/Dialog.demo1.vue";
import DialogDemo2 from "/@/components/demos/Dialog.demo2.vue";
export default {
  name: "DialogDemo",
  components: { Demo, BottomNav },
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
    };
  },
};
</script>
