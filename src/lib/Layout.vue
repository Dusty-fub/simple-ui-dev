<template>
  <div class="layout" :class="isHasSider">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
export default {
  setup(props, ctx) {
    const isHasSider = reactive({ isHasSider: false });
    ctx.slots.default().map((item) => {
      if (item.type["name"] === "guluSider") {
        isHasSider.isHasSider = true;
      }
    });

    return { isHasSider };
  },
};
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.isHasSider {
  flex-direction: row;
  flex-grow: 1;
  height: auto;
}
</style>
