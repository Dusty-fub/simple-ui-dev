<template>
  <div class="gulu-popover">
    <span
      class="gulu-popover-toggle"
      tabindex="0"
      hidefocus="true"
      @click="toggleContent('click')"
      @focus="toggleContent('focus')"
      @blur="toggleContent('focus')"
      @mouseover="toggleContent('hover')"
      @mouseout="toggleContent('hover')"
    >
      <slot></slot>
    </span>
    <div v-if="isContentVisible" :class="classes">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from "vue";
export default {
  props: {
    position: {
      type: String,
      default: "top",
    },
    trigger: {
      type: String,
      default: "click",
    },
  },
  setup(props, ctx) {
    const isContentVisible = ref(false);

    const toggleContent = (type) => {
      props["trigger"] === type && (isContentVisible.value = !isContentVisible.value);
    };

    const classes = reactive({});
    classes[`gulu-popover-content-${props["position"]}`] = true;

    return {
      toggleContent,
      isContentVisible,
      classes,
    };
  },
};
</script>
<style lang="scss">
.gulu-popover {
  display: inline-block;
  position: relative;

  .gulu-popover-toggle {
    outline: 0;
  }

  @mixin popover-position($position) {
    $contrastPosition: "bottom";
    $tX: 0;
    $tY: 0;
    @if $position == "top" {
      $tY: -100%;
    } @else if $position == "bottom" {
      $contrastPosition: "top";
      $tY: 100%;
    } @else if $position == "left" {
      $tY: 0;
      $tX: -100%;
      $contrastPosition: "right";
    } @else if $position== "right" {
      $tX: 100%;
      $tY: 0;
      $contrastPosition: "left";
    }
    .gulu-popover-content-#{$position} {
      position: absolute;

      @if $position != bottom {
        transform: translate3d($tX, $tY, 0);
        top: 0;
      }
      @if $position == "top" {
        top: -7px;
      }

      padding: 0.5em;
      background-color: white;
      border: 1px solid #333;
      border-radius: 0.2em;
      box-shadow: 0 0 9px #ccc;

      &::before,
      &::after {
        content: "";
        display: block;
        border: 7px solid transparent;
        width: 0;
        height: 0;
        position: absolute;

        @if $position != "right" {
          left: 30%;
        }
        @if $position != "bottom" {
          top: 9px;
        }
      }
      &::before {
        border-#{$contrastPosition}: none;
        border-#{$position}-color: black;
        #{$position}: 100%;
      }
      &::after {
        border-#{$contrastPosition}: none;
        border-#{$position}-color: white;
        #{$position}: calc(100% - 1px);
      }
    }
  }

  @include popover-position(top);
  @include popover-position(bottom);
  @include popover-position(left);
  @include popover-position(right);
}
</style>
