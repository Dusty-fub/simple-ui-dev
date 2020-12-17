<template>
  <article>
    <header @click="toggleContent" class="gulu-collapse-title">{{ title }}</header>
    <main v-if="isContentVisible">
      <slot></slot>
    </main>
  </article>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },
  setup() {
    const isContentVisible = ref(false);
    const toggleContent = () => {
      isContentVisible.value = !isContentVisible.value;
    };
    return { toggleContent, isContentVisible };
  },
};
</script>
<style lang="scss">
.gulu-collapse-title {
  cursor: pointer;
  padding: 1em 0;
  border-top: 1px solid #ccc;
}
</style>
