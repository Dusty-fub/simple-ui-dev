<template>
  <Demo :component="PopoverDemo1" />
</template>
<script lang="ts">
import Demo from "/src/components/Demo.vue";
import PopoverDemo1 from "../demos/popover/Popover.demo1.vue";
export default {
  components: { Demo },
  setup() {
    return { PopoverDemo1 };
  },
};
</script>
<style lang="scss" scoped></style>
