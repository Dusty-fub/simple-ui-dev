<template>
  <div
    class="layout"
    :class="isHasSider"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { reactive, ref, getCurrentInstance, onMounted } from "vue";
export default {
  name: "gulu-layout",
  setup(props, ctx) {
    const isHasSider = reactive({ isHasSider: false });
    ctx.slots.default().map((item) => {
      if (item.type["name"] === "guluSider") {
        isHasSider.isHasSider = true;
      }
    });

    const instance = getCurrentInstance();
    onMounted(() => {
      if (instance.parent.type.name === "gulu-layout") {
        instance.subTree.el.style.height = "auto";
        instance.subTree.el.style["flex-grow"] = "1";
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
}
</style>
