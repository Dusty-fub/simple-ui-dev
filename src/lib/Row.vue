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
    let offs = [];
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
        offs[index] = col.props.offset;
        off += col.props.offset;
      } else {
        offs[index] = 0;
      }

      if (props.gutter) {
        if (col.props.span) {
          col.props.gutter = props.gutter;
        } else {
          col.props = { gutter: props.gutter };
        }
      }
    });
    if (off + allocation > 24) {
      throw new Error("宽总数不超过24");
    }

    let reAllocate = (24 - allocation - off) / toAllocate.length;
    toAllocate.map((i) => {
      if (cols[i].props?.hasOwnProperty("gutter")) {
        cols[i].props.span = reAllocate;
      } else {
        cols[i].props = { span: reAllocate };
      }
    });

    off = 0;
    offs.map((val, index) => {
      off += val;
      cols[index].props.offset = off;
    });

    cols[0].props.farLeft = true;
    cols[cols.length - 1].props.farRight = true;
    if (props.gutter) {
      const gutterSpace = (cols.length * 2 - 2) * props.gutter;
      cols.map((col) => {
        if (col.props.offset) {
          col.props.gutterSpace = gutterSpace;
        }
      });
    }

    return { cols };
  },
};
</script>
<style lang="scss">
.gulu-row {
  display: flex;
}
</style>