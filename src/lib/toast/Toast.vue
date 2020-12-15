<template>
  <div class="gulu-toast" :class="classes">{{ msg }}</div>
</template>
<script lang="ts">
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
export default {
  props: {
    msg: {
      type: String,
      default: "toast msg",
    },
    field: {
      type: Object,
      default: {
        position: "top",
        toastAmount: 0,
      },
    },
    autoCloseSeconds: {
      type: [Boolean, Number],
      default: 3,
      validator(value) {
        return value === false || (typeof value === "number" && value > 0);
      },
    },
  },
  setup(props, ctx) {
    let classes = reactive({});

    classes[
      `gulu-toast-${props["field"]["position"]}-${props["field"]["toastAmount"]}`
    ] = true;

    onMounted(() => {
      exeClose();
    });

    const exeClose = () => {
      if (props["autoCloseSeconds"]) {
        setTimeout(() => {
          ctx.emit("close");
        }, props["autoCloseSeconds"] * 1000);
      }
    };
    return { classes };
  },
};
</script>
<style lang="scss">
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
  line-height: 1em;
  border-radius: 0.25em;
  background-color: #edf2fc;
  min-width: 380px;
  max-width: 690px;
}

@for $i from 1 through 6 {
  .gulu-toast-top-#{$i} {
    top: -2em + $i * 2.7;
    @include slideFun(top);
  }

  .gulu-toast-bottom-#{$i} {
    bottom: -2em + $i * 2.7;
    @include slideFun(bottom);
  }
}
</style>
