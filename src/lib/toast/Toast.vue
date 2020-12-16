<template>
  <div class="gulu-toast" :class="classes">
    <span class="iconWrap">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${type}`"></use>
      </svg>
    </span>
    <span v-if="dangerouslyUseHTMLString" ref="htmlMsg"> </span>
    <span v-else>
      {{ msg }}
    </span>
    <span v-if="showClose" class="closeBtn" @click="userClose">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-close`"></use>
      </svg>
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
    isCenter: {
      type: Boolean,
      default: false,
    },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false,
    },
    showClose: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    let classes = reactive({});

    classes[
      `gulu-toast-${props["field"]["position"]}-${props["field"]["toastAmount"]}`
    ] = true;

    classes[`gulu-toast-${props["field"]["position"]}-enter`] = true;
    classes[`gulu-toast-Center`] = props["isCenter"];

    const htmlMsg = ref<HTMLSpanElement>();

    let isAutoClose = !!props["autoCloseSeconds"];

    onMounted(() => {
      if (props["dangerouslyUseHTMLString"]) {
        htmlMsg.value.innerHTML = props["msg"];
      }

      setTimeout(() => {
        classes[`gulu-toast-${props["field"]["position"]}-fade`] = true;
      }, props["autoCloseSeconds"] * 1000 - 300);

      exeAutoClose();
    });

    const exeAutoClose = () => {
      if (props["autoCloseSeconds"]) {
        setTimeout(() => {
          close();
        }, props["autoCloseSeconds"] * 1000);
      }
    };
    const userClose = () => {
      close();
      isAutoClose = false;
    };
    const close = () => {
      isAutoClose && ctx.emit("close");
    };
    return { classes, htmlMsg, userClose };
  },
};
</script>
<style lang="scss">
.gulu-toast {
  position: fixed;
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
    left: 50%;
    transform: translateX(-50%);
    top: -2em + $i * 2.7;
  }

  .gulu-toast-bottom-#{$i} {
    left: 50%;
    transform: translateX(-50%);
    bottom: -2em + $i * 2.7;
  }

  .gulu-toast-top-right-#{$i} {
    top: -2em + $i * 2.7;
    right: 1em;
  }

  .gulu-toast-bottom-right-#{$i} {
    bottom: -2em + $i * 2.7;
    right: 1em;
  }

  .gulu-toast-top-left-#{$i} {
    top: -2em + $i * 2.7;
    left: 1em;
  }

  .gulu-toast-bottom-left-#{$i} {
    bottom: -2em + $i * 2.7;
    left: 1em;
  }
}

@mixin slideFun($direction) {
  $tY: -100%;
  $tX: -50%;
  @if $direction == "bottom" {
    $tY: 100%;
  } @else if ($direction == "bottom-left" or $direction == "bottom-right") {
    $tY: 100%;
    $tX: 0;
  } @else if $direction != "top" {
    $tX: 0;
  }

  .gulu-toast-#{$direction}-enter {
    @keyframes #{$direction}-enter {
      0% {
        opacity: 0;
        transform: translate3d($tX, $tY, 0);
      }
      100% {
        opacity: 1;
        transform: translate3d($tX, 0, 0);
      }
    }

    animation: #{$direction}-enter 300ms;
  }

  .gulu-toast-#{$direction}-fade {
    @keyframes #{$direction}-fade {
      0% {
        opacity: 1;
        transform: translate3d($tX, 0, 0);
      }
      100% {
        opacity: 0;
        transform: translate3d($tX, $tY, 0);
      }
    }

    animation: #{$direction}-fade 400ms;
  }
}

@include slideFun(top);
@include slideFun(bottom);
@include slideFun("top-left");
@include slideFun("top-right");
@include slideFun("bottom-left");
@include slideFun("bottom-right");

.iconWrap {
  margin-right: 0.6em;
}

.gulu-toast-Center {
  text-align: center;
}

.closeBtn {
  position: absolute;
  right: 0.5em;
  cursor: pointer;
}
</style>
