<template>
  <div class="gulu-sider" ref="guluSider">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  name: "guluSider",
  props: {
    width: {
      type: String,
      default: "300px",
    },
  },
  setup(props) {
    const guluSider = ref<HTMLDivElement>(null);
    onMounted(() => {
      guluSider.value.style.width = props.width;
    });
    return { guluSider };
  },
};
</script>

<style lang="scss">
.gulu-sider {
  background-color: #d3dce6;
}
</style>
