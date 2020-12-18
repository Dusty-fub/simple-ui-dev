<template>
  <article>
    <header @click="toggleContent" class="gulu-collapse-title">{{ title }}</header>
    <transition name="fade">
      <main v-if="isContentVisible" ref="guluCollapseContent">
        <slot></slot>
      </main>
    </transition>
  </article>
</template>
<script lang="ts">
import { onMounted, reactive, ref } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
    isUnfold: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const isContentVisible = ref(props.isUnfold);
    const toggleContent = () => {
      isContentVisible.value && (guluCollapseContent.value.style.height = "0px");
      isContentVisible.value = !isContentVisible.value;

      setTimeout(() => {
        if (isContentVisible.value) {
          height === 0 &&
            ctx.slots.default().map((item) => {
              height += item.el.clientHeight;
            });
          guluCollapseContent.value.style.height = height + "px";
        }
      });
    };

    const guluCollapseContent = ref(null);

    let height = 0;

    onMounted(() => {
      if (isContentVisible.value) {
        height = guluCollapseContent.value.clientHeight;
        guluCollapseContent.value.style.height =
          guluCollapseContent.value.clientHeight + "px";
      }
    });

    return { toggleContent, isContentVisible, guluCollapseContent };
  },
};
</script>
<style lang="scss">
.gulu-collapse-title {
  cursor: pointer;
  padding: 1em 0;
  border-top: 1px solid #ccc;
}

.fade-enter-active,
.fade-leave-active {
  transition: height 1s ease;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  height: 0;
}
</style>
