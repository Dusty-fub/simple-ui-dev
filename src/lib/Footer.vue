<template>
  <div class="gulu-footer" ref="guluFooter">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
  setup(props) {
    const guluFooter = ref<HTMLDivElement>(null);
    onMounted(() => {
      guluFooter.value.style.height = props.height;
    });
    return { guluFooter };
  },
};
</script>

<style lang="scss">
.gulu-footer {
  background-color: #b3c0d1;
}
</style>
