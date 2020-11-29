<template>
  <div class="gulu-row">
    <component
      v-for='(i,index) in cols'
      :is='i'
      :key='index'
    />
  </div>
</template>
<script lang='ts'>
import { nextTick, watchEffect } from "vue";
export default {
  props: {
    gutter: [Number],
  },
  setup(props, ctx) {
    const cols = ctx.slots.default();
    let allocation = 0;
    let off = 0;
    let toAllocate = [];
    cols.map((col, index) => {
      if (col.type["name"] !== "gulu-col") {
        throw new Error("Row 子标签必须是 Col");
      }
      if (col.props?.hasOwnProperty("span")) {
        allocation += col.props.span;
      } else {
        toAllocate.push(index);
      }
      if (col.props?.hasOwnProperty("offset")) {
        off += col.props.offset;
      }
    });
    if (off + allocation > 24) {
      throw new Error("宽总数不超过24");
    }
    let reAllocate = (24 - allocation) / toAllocate.length;
    toAllocate.map((i) => {
      cols[i].props = { span: reAllocate };
    });
    return { cols };
  },
};
</script>
<style lang="scss">
.gulu-row {
  display: flex;
}
</style>