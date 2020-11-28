<template>
  <input
    class='gulu-input'
    type="text"
    :value="modelValue||value"
    :placeholder="placeholder"
    :disabled='disabled'
    :readonly="readonly"
    :class="{'error':error}"
    @change="$emit('change',$event)"
    @input="inputEvent"
    @focus="$emit('focus',$event)"
    @blur="$emit('blur',$event)"
  >
  <template v-if='error'>
    <span class="gulu-icon">
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-wrong"></use>
      </svg>
    </span>
    <span class="gulu-error-infor">{{'error information'}}</span>
  </template>

</template>
<script lang='ts'>
export default {
  props: {
    modelValue: String,
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "please input ...",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["change", "blur", "input", "focus", "update:modelValue"],
  setup(props, ctx) {
    const inputEvent = (e) => {
      ctx.emit("input", e);
      ctx.emit("update:modelValue", e.target.value);
    };
    return { inputEvent };
  },
};
</script>
<style lang="scss">
.gulu-input {
  height : 2em;
  border : .0625em solid #999999;
  padding : 0 .5em;
  margin : .1em .5em;
  outline : none;
  &:hover {
    border-color : #666666;
  }
  &:focus:not([readonly]) {
    box-shadow : inset 0 0px 3px rgba(0, 0, 0, .5);
  }
  &[disabled] {
    border-color : #CCCCCC;
    color : #CCCCCC;
    cursor : not-allowed;
  }
  &.error {
    border-color : hsl(355, 90%, 50%);
    &:focus {
      box-shadow : inset 0 0 3px hsl(365, 80%, 50%);
    }
  }
}
.gulu-icon {
  padding : 0 .5em 0 0;
}
.gulu-error-infor {
  color : hsl(365, 90%, 50%);
}

</style>