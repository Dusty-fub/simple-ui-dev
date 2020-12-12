<template>
  <div
    class="gulu-col"
    :class="phoneClass"
    ref="guluCol"
  >
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { onMounted, reactive, ref } from "vue";
export default {
  name: "gulu-col",
  props: {
    span: [Number],
    offset: { type: Number, default: 0 },
    gutter: { type: Number, default: 0 },
    farLeft: { type: Boolean, default: false },
    farRight: { type: Boolean, default: false },
    gutterSpace: { type: Number, default: 0 },
    phone: {
      type: Object,
      default: {},
      validator(value) {
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach((key) => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      },
    },
  },
  setup(props) {
    const guluCol = ref<HTMLDivElement>(null);
    onMounted(() => {
      guluCol.value.style.flex = `${props["span"] / 24}`;
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
    const phoneClass = reactive({});
    phoneClass["a"] = "jjj";

    return { guluCol, phoneClass };
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
@media (max-width: 576px) {
  //手机
}

@media (min-width: 577px) and (max-width: 768px) {
  //ipad
}

@media (min-width: 769px) and (max-width: 992px) {
  //宅屏幕 narrow-pc
}

@media (min-width: 993px) and (max-width: 1200px) {
  //pc
}

@media (min-width: 1201px) {
  // wide-pc
}
</style>