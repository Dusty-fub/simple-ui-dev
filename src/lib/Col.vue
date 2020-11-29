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
    offset: { type: Number, default: 0 },
    gutter: { type: Number, default: 0 },
    farLeft: { type: Boolean, default: false },
    farRight: { type: Boolean, default: false },
    gutterSpace: { type: Number, default: 0 },
  },
  setup(props) {
    const guluCol = ref<HTMLDivElement>(null);
    onMounted(() => {
      guluCol.value.style.flex = `${props.span / 24}`;
      if (props.gutterSpace) {
        guluCol.value.style["left"] = `calc(${(props.offset / 24) * 100}% - ${
          (props.gutterSpace * props.offset) / 24
        }em )`;
      } else {
        guluCol.value.style["left"] = `${(props.offset / 24) * 100}%`;
      }
      guluCol.value.style["margin"] = `0 ${props.gutter}em`;
      if (props.farLeft) {
        guluCol.value.style["margin-left"] = "0";
      }
      if (props.farRight) {
        guluCol.value.style["margin-right"] = "0";
      }
    });
    return { guluCol };
  },
};
</script>
<style lang="scss">
.gulu-col {
  height: 3em;
  background-color: grey;
  box-shadow: inset 1px 0 pink, inset -1px 0 pink, inset 0px 1px pink,
    inset 0 -1px pink;
  position: relative;
}
</style>