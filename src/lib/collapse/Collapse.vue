<template>
  <slot></slot>
  <footer class="gulu-collapse-item-footer"></footer>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  setup(props, ctx) {
    // ctx.slots.default()[0].props["isUnfold"] = true;
    // const collapseItems = ref(null);
    // onMounted(() => {
    //   console.log(collapseItems.value);
    // });
    // return { collapseItems };
  },
};
</script>
<style lang="scss">
.gulu-collapse-item-footer {
  border-bottom: 1px solid #ccc;
}
</style>
