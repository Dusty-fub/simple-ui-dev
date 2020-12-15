<template>
  <div class="gulu-toast" :class="'gulu-toast-' + position">{{ msg }}</div>
</template>
<script lang="ts">
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
export default {
  props: {
    msg: {
      type: String,
      default: "toast msg",
    },
    position: {
      type: String,
      default: "top",
    },
    autoCloseSeconds: {
      type: [Boolean, Number],
      default: 4,
      validator(value) {
        return value === false || (typeof value === "number" && value > 0);
      },
    },
  },
  setup(props, ctx) {
    // const classes = ref(props.position);
    // return { classes };
    onMounted(() => {
      if (props["autoCloseSeconds"]) {
        setTimeout(() => {
          ctx.emit("close");
        }, props["autoCloseSeconds"] * 1000);
      }
    });
  },
};
</script>
<style lang="scss" scoped>
@mixin slideFun($direction) {
  transform: translateX(-50%);
  $tY: -100%;
  @if $direction == "bottom" {
    $tY: 100%;
  } @else if $direction == "middle" {
    // todo
  }

  @keyframes #{$direction} {
    0% {
      opacity: 0;
      transform: translate3d(-50%, $tY, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(-50%, 0, 0);
    }
  }

  animation: $direction 300ms;
}

.gulu-toast {
  position: fixed;
  left: 50%;
  z-index: 1917;
  padding: 0.5em 1em;
  border-radius: 0.25em;
  background-color: #edf2fc;
  min-width: 380px;
  max-width: 690px;
}

.gulu-toast-bottom {
  bottom: 10px;
  @include slideFun(bottom);
}
.gulu-toast-top {
  top: 10px;
  @include slideFun(top);
}
</style>
