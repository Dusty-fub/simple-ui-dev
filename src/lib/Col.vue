<template>
  <div
    class="col"
    :class="[`col-${span}`]"
  >
    <slot></slot>
  </div>
</template>
<script lang='ts'>
export default {
  props: {
    span: {
      type: Number,
      default: 24,
    },
  },
};
</script>
<style lang="scss">
.col {
  height : 100px;
  flex : 1;
  background-color : grey;
  border : 1px solid pink;
  $class-prefix : col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      flex : ($n/24);
    }
  }
}

</style>