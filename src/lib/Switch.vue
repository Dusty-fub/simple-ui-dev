<template >

  <div>
    <button
      class="gulu-switch"
      :class="{ 'gulu-checked': checkedValue }"
      @click="toggle"
    >
      <span class="gulu-switchBoll"></span>
    </button>
  </div>
</template>

<script lang="ts" >
import { ref } from "vue";
export default {
  props: {
    checkedValue: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:checkedValue", !props.checkedValue);
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.gulu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  outline: none;
  background-color: gray;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
}

.gulu-switchBoll {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background-color: white;
  border-radius: $h2/2;
  transition: left 0.3s;
}

.gulu-switch.gulu-checked {
  background-color: hsl(222, 100%, 60%);

  > .gulu-switchBoll {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>
