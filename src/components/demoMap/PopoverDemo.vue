<template>
  <Demo :component="PopoverDemo1" />
  <Demo :component="PopoverDemo2" />
</template>
<script lang="ts">
import Demo from "/src/components/Demo.vue";
import PopoverDemo1 from "../demos/popover/Popover.demo1.vue";
import PopoverDemo2 from "../demos/popover/Popover.demo2.vue";
export default {
  components: { Demo },
  setup() {
    return { PopoverDemo1, PopoverDemo2 };
  },
};
</script>
<style lang="scss" scoped></style>
