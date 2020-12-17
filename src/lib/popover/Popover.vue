<template>
  <div class="gulu-popover">
    <span @click="toggleContent">
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
  },
  setup(props, ctx) {
    // console.log(ctx.slots.default());
    if (ctx.slots.default()) {
    }
    const isContentVisible = ref(false);
    const toggleContent = () => {
      isContentVisible.value = !isContentVisible.value;
    };
    const classes = reactive({});
    classes["gulu-popover-content-bottom"] = props.position === "bottom";
    classes["gulu-popover-content-top"] = props.position === "top";

    return { toggleContent, isContentVisible, classes };
  },
};
</script>
<style lang="scss">
.gulu-popover {
  position: relative;

  > .gulu-popover-content-top {
    position: absolute;
    top: 0px;
    transform: translateY(-120%);
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
      left: 30%;
    }
    &::before {
      border-bottom: none;
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-bottom: none;
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }

  > .gulu-popover-content-bottom {
    position: absolute;
    bottom: 0px;
    transform: translateY(120%);
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
      left: 30%;
    }
    &::before {
      border-top: none;
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
}
</style>
