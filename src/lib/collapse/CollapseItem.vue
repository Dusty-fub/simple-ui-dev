<template>
  <article>
    <header @click="toggleContent" class="gulu-collapse-title">{{ title }}</header>

    <transition name="fade">
      <main v-if="isContentVisible" class="gulu-collapse-content-main">
        <section :class="classes">
          <slot></slot>
        </section>
      </main>
    </transition>
  </article>
</template>
<script lang="ts">
import { reactive, ref } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },
  setup(props, ctx) {
    const isContentVisible = ref(false);
    const classes = reactive({});
    const toggleContent = () => {
      isContentVisible.value = !isContentVisible.value;

      classes["gulu-content-animation-enter"] = isContentVisible.value;
      classes["gulu-content-animation-fade"] = !isContentVisible.value;
      setTimeout(() => {
        // console.log(ctx.slots.default()[0].el.clientHeight);
        console.log(ctx.slots.default()[0]);
      }, 3000);

      console.log(ctx.slots.default()[0]);
      // console.log(ctx.slots.default());

      // console.log(ctx.slots.default()[0].el.clientHeight);
    };

    return { toggleContent, isContentVisible, classes };
  },
};
</script>
<style lang="scss">
.gulu-collapse-title {
  cursor: pointer;
  padding: 1em 0;
  border-top: 1px solid #ccc;
}

// .fade-enter-active,
// .fade-leave-active {
//   // transition: transform 5s ease;
//   // overflow: hidden;
// }

// .fade-enter-from,
// .fade-leave-to {
//   // height: 0;
//   // transform: translateY(-100%);
// }
// .fade-enter-to,
// .fade-leave-from {
//   // height: calc(auto + 1px);
//   // min-height: auto;
//   // max-height: auto;
// }

// .gulu-collapse-content-main {
//   // display: flex;
//   position: relative;
// }
// .gulu-content-animation-enter {
//   // bottom: -100%;
//   @keyframes enter {
//     0% {
//       // height: 0;
//       // top: 0;
//       position: absolute;
//       top: 0;
//       bottom: -100%;
//       // flex: 0;
//       // max-width: 0;
//     }
//     50% {
//       // flex: 0.5;
//       // background-color: red;
//       // bottom: -50%;
//     }
//     90% {
//       // max-height: 999px;
//     }
//     100% {
//       position: absolute;
//       top: 0;
//       bottom: 0%;
//       // height: 100%;
//       // flex: 1;
//       height: auto;
//       // height: 90px;
//     }
//   }
//   position: absolute;
//   top: 0;
//   bottom: -100%;
//   // bottom: -50%;

//   // animation: enter 1000ms linear;
//   // flex: 0;
//   // height: 0;
//   overflow: hidden;
// }
// .gulu-content-animation-fade {
//   //
// }
</style>
