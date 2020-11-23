<template>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
</template>

<script lang='ts' >
import Demo from "/@/components/Demo.vue";
import DialogDemo1 from "/@/components/demos/Dialog.demo1.vue";
import DialogDemo2 from "/@/components/demos/Dialog.demo2.vue";
export default {
  name: "DialogDemo",
  components: { Demo },
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
    };
  },
};
</script>
