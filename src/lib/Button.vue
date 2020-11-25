<template >
  <button
    v-bind="$attrs"
    class="gulu-button"
    :class="classes"
  >
    <span
      v-if='lineLoading'
      class="gulu-loadingIndicator"
      :class="iconClasses"
    ></span>

    <span
      v-if='(icon||dotLoading)&&
            (iconPosition==="left"||iconPosition==="right")'
      :class="iconClasses"
    >
      <svg
        class="icon"
        :class="{iconLoading:dotLoading}"
        aria-hidden="true"
      >
        <use :xlink:href="`#icon-${dotLoading?'loading':icon}`"></use>
      </svg>
    </span>

    <span class="slotTest">
      <slot />
    </span>
  </button>
</template>
<script lang="ts" >
import {
  computed,
  onMounted,
  reactive,
  ref,
  watch,
  watchEffect,
  nextTick,
} from "vue";
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
    icon: {
      type: String,
      default: "",
    },
    dotLoading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    lineLoading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { icon, theme, size, level, disabled, iconPosition } = props;

    let leftIcon = ref();
    let rightIcon = ref();
    let iconClasses = reactive({});

    watchEffect(() => {
      leftIcon.value = iconPosition === "left";
      rightIcon.value = iconPosition === "right";

      if (
        !context.slots.default ||
        (!icon && !props["dotLoading"] && !props["lineLoading"])
      ) {
        leftIcon.value = false;
        rightIcon.value = false;
      }

      iconClasses["gulu-leftSpan"] = leftIcon.value;
      iconClasses["gulu-rightSpan"] = rightIcon.value;
    });

    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
        [`gulu-level-${level}`]: level,
        disabled,
        lineLoading: props["lineLoading"],
        "gulu-leftIcon": leftIcon.value,
        "gulu-rightIcon": rightIcon.value,
      };
    });

    return { classes, iconClasses };
  },
};
</script>
<style lang="scss">
$h: 30px;
$border-color: #999999;
$color: #333333;
$blue: #40a9ff;
$radius: 4px;
$red: hsl(0, 100%, 50%);
$grey: hsl(0, 0%, 50%);
.gulu-button {
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  white-space: nowrap;
  background-color: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 1 fade-out (black, 0.95);
  margin: 0px 8px 8px;

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &fouce {
      background-color: darken(white, 5%);
    }
  }

  &.gulu-theme-button {
    &.gulu-level-main {
      background-color: $blue;
      border-color: $blue;
      color: white;
      &:hover,
      &:focus {
        background-color: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      background-color: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background-color: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.gulu-theme-link {
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.gulu-theme-text {
    &.gulu-level-main {
      color: $blue;
      &:hover,
      &focus {
        color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &focus {
        color: darken($red, 10%);
      }
    }
  }

  &.gulu-theme-button {
    &.disabled {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }

  &.gulu-theme-link,
  &.gulu-theme-text {
    &.disabled {
      cursor: not-allowed;
      color: $grey;
    }
  }
}

.gulu-size-big {
  font-size: 18px;
  padding: 0 18px;
  height: 36px;
  line-height: 36px;
}
.gulu-size-normal {
  font-size: 16px;
  padding: 0 16px;
  height: 30px;
  line-height: 30px;
}
.gulu-size-small {
  font-size: 14px;
  padding: 0 14px;
  height: 24px;
  line-height: 24px;
}
.gulu-leftIcon {
  padding-left: 0.8em;
}
.gulu-rightIcon {
  padding-right: 0.8em;
}
.gulu-leftSpan {
  order: 1;
  margin-right: 0.5em;
}
.slotTest {
  order: 2;
}
.gulu-rightSpan {
  order: 3;
  margin-left: 0.5em;
}
.gulu-loadingIndicator {
  width: 14px;
  height: 14px;
  display: inline-block;
  border-radius: 8px;
  border-color: $blue $blue $blue transparent;
  border-style: solid;
  border-width: 2px;
  animation: gulu-spin 1.5s infinite linear;
}
.icon {
  height: 1em;
  width: 1em;
}
.iconLoading {
  animation: gulu-spin 1.5s infinite linear;
}
@keyframes gulu-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
