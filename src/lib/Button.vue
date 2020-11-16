<template>
  <button v-bind="$attrs" class="gulu-button" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, ref } from "vue";
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
  },
  setup(props, context) {
    const { theme, size } = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
      };
    });

    return { classes };
  },
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

  &.gulu-theme-text {
    border-color : transparent;
    box-shadow : none;
    color : inherit;
    &:hover, &fouce {
      background-color : darken(white, 5%);
    }
  }

  &.gulu-theme-button {
    &.gulu-size-big {
      font-size : 24px;
      height : 48px;
      padding : 0 16px;
    }
    &.gulu-size-small {
      font-size : 16px;
      height : 24px;
      padding : 0 4px;
    }
  }
}

</style>
