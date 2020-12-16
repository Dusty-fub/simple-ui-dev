<template>
  <slot></slot>
</template>
<script lang="ts">
export default {
  props: {
    position: {
      type: String,
      default: "top",
    },
  },
  setup(props, ctx) {
    console.log(ctx.slots.default());
  },
};
</script>
<style lang="scss"></style>
