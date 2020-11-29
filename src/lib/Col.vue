<template>
  <div
    class="gulu-col"
    ref="guluCol"
  >
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { onMounted, ref } from "vue";
export default {
  name: "gulu-col",
  props: {
    span: [Number],
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const guluCol = ref<HTMLDivElement>(null);
    onMounted(() => {
      guluCol.value.style.flex = `${props.span / 24}`;
      guluCol.value.style["left"] = `${(props.offset / 24) * 100}%`;
    });
    return { guluCol };
  },
};
</script>
<style lang="scss">
.gulu-col {
  height: 100px;
  background-color: grey;
  box-shadow: inset 1px 0 pink, inset -1px 0 pink, inset 0px 1px pink,
    inset 0 -1px pink;

  position: relative;
}
</style>