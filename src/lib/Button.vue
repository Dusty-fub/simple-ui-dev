<template>
  <button v-bind="$attrs" class="gulu-button" :class="`gulu-theme-${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
  setup(props, context) {},
};
</script>

<style lang="scss">
$h : 32px;
$border-color : #D9D9D9;
$color : #333333;
$blue : #40A9FF;
$radius : 4px;

.gulu-button {
  box-sizing : border-box;
  height : $h;
  padding : 0 12px;
  cursor : pointer;
  display : inline-flex;
  justify-content : center;
  align-items : center;
  white-space : nowrap;
  background-color : white;
  color : $color;
  border : 1px solid $border-color;
  border-radius : $radius;
  box-shadow : 0 1px 1 fade-out (black, .95);
  & + & {
    margin-left : 8px;
  }
  &:hover, &:focus {
    color : $blue;
    border-color : $blue;
  }
  &:focus {
    outline : none;
  }
  &::-moz-focus-inner {
    border : 0;
  }
}

</style>
