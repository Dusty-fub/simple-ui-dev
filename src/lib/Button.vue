<template >
  <button
    v-bind="$attrs"
    class="gulu-button"
    :class="classes"
  >
    <span
      v-if='loading'
      class="gulu-loadingIndicator"
    ></span>
    <span v-if='icon&&iconPosition==="left"'>
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use :xlink:href="`#icon-${icon}`"></use>
      </svg>
    </span>
    <slot />
    <span v-if='icon&&iconPosition==="right"'>
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use :xlink:href="`#icon-${icon}`"></use>
      </svg>
    </span>

  </button>
</template>
<script lang="ts" >
import { computed, onMounted, ref } from "vue";
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
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        if (value !== "left" && value !== "right") {
          return false;
        }
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
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { theme, size, level, disabled, loading, iconPosition } = props;

    let leftIcon = iconPosition === "left";
    let rightIcon = iconPosition === "right";

    if (!context.slots.default) {
      leftIcon = false;
      rightIcon = false;
    }

    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
        [`gulu-level-${level}`]: level,
        disabled,
        loading,
        "gulu-leftIcon": leftIcon,
        "gulu-rightIcon": rightIcon,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h : 30px;
$border-color : #999999;
$color : #333333;
$blue : #40A9FF;
$radius : 4px;
$red : hsl(0, 100%, 50%);
$grey : hsl(0, 0%, 50%);
.gulu-button {
  box-sizing : border-box;
  cursor : pointer;
  display : inline-flex;
  justify-content : center;
  align-items : center;
  vertical-align : middle;
  white-space : nowrap;
  background-color : white;
  color : $color;
  border : 1px solid $border-color;
  border-radius : $radius;
  box-shadow : 0 1px 1 fade-out (black, .95);
  margin : 0px 8px 8px;

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

  &.gulu-theme-link {
    border-color : transparent;
    box-shadow : none;
    color : $blue;
    &:hover, &:focus {
      color : lighten($blue, 10%);
    }
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
    &.gulu-level-main {
      background-color : $blue;
      border-color : $blue;
      color : white;
      &:hover, &:focus {
        background-color : darken($blue, 10%);
        border-color : darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      background-color : $red;
      border-color : $red;
      color : white;
      &:hover, &:focus {
        background-color : darken($red, 10%);
        border-color : darken($red, 10%);
      }
    }
  }

  &.gulu-theme-link {
    &.gulu-level-danger {
      color : $red;
      &:hover, &:focus {
        color : darken($red, 10%);
      }
    }
  }

  &.gulu-theme-text {
    &.gulu-level-main {
      color : $blue;
      &:hover, &focus {
        color : darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      color : $red;
      &:hover, &focus {
        color : darken($red, 10%);
      }
    }
  }

  &.gulu-theme-button {
    &.disabled {
      cursor : not-allowed;
      color : $grey;
      &:hover {
        border-color : $grey;
      }
    }
  }

  &.gulu-theme-link, &.gulu-theme-text {
    &.disabled {
      cursor : not-allowed;
      color : $grey;
    }
  }
  > .gulu-loadingIndicator {
    width : 14px;
    height : 14px;
    display : inline-block;
    margin-right : .5em;
    border-radius : 8px;
    border-color : $blue $blue $blue transparent;
    border-style : solid;
    border-width : 2px;
    animation : gulu-spin 1s infinite linear;
  }
}

@keyframes gulu-spin {
  0% {
    transform : rotate(0deg);
  }
  100% {
    transform : rotate(360deg);
  }
}
.gulu-size-big {
  font-size : 18px;
  padding : 0 18px;
  height : 36px;
}
.gulu-size-normal {
  font-size : 16px;
  padding : 0 16px;
  height : 30px;
  line-height : 30px;
}
.gulu-size-small {
  font-size : 14px;
  padding : 0 14px;
  height : 24px;
}

.icon {
  height : 1em;
  width : 1em;
}
.gulu-leftIcon {
  padding-left : .8em;
  svg {
    margin-right : .5em;
  }
}

.gulu-rightIcon {
  padding-right : .8em;
  svg {
    margin-left : .5em;
  }
}

</style>
