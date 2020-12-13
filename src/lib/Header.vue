<template>
  <div class="gulu-header" ref="guluHeader">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  name: "guluHeader",
  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
  setup(props) {
    const guluHeader = ref<HTMLDivElement>(null);

    onMounted(() => {
      guluHeader.value.style.height = props.height;
    });

    return { guluHeader };
  },
};
</script>

<style lang="scss">
.gulu-header {
  background-color: #b3c0d1;
}
</style>
