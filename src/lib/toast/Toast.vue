<template>
  <div class="gulu-toast" :class="classes">
    <span class="iconWrap">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${type}`"></use>
      </svg>
    </span>
    <span>
      {{ msg }}
    </span>
  </div>
</template>
<script lang="ts">
import "../svg.js";
import { getCurrentInstance, onMounted, onUnmounted, reactive, ref } from "vue";
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
    type: {
      type: String,
      default: "tip",
    },
  },
  setup(props, ctx) {
    let classes = reactive({});

    classes[
      `gulu-toast-${props["field"]["position"]}-${props["field"]["toastAmount"]}`
    ] = true;

    classes[`gulu-toast-${props["field"]["position"]}-enter`] = true;

    onMounted(() => {
      setTimeout(() => {
        classes[`gulu-toast-${props["field"]["position"]}-fade`] = true;
      }, props["autoCloseSeconds"] * 1000 - 300);

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
  $tY: -100%;
  @if $direction == "bottom" {
    $tY: 100%;
  } @else if $direction == "middle" {
    // todo
  }

  .gulu-toast-#{$direction}-enter {
    @keyframes #{$direction}-enter {
      0% {
        opacity: 0;
        transform: translate3d(-50%, $tY, 0);
      }
      100% {
        opacity: 1;
        transform: translate3d(-50%, 0, 0);
      }
    }

    animation: #{$direction}-enter 300ms;
  }

  .gulu-toast-#{$direction}-fade {
    @keyframes #{$direction}-fade {
      0% {
        opacity: 1;
        transform: translate3d(-50%, 0, 0);
      }
      100% {
        opacity: 0;
        transform: translate3d(-50%, $tY, 0);
      }
    }

    animation: #{$direction}-fade 400ms;
  }
}

.gulu-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
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
  }

  .gulu-toast-bottom-#{$i} {
    bottom: -2em + $i * 2.7;
  }
}
@include slideFun(top);
@include slideFun(bottom);

.iconWrap {
  margin-right: 0.6em;
}
</style>
