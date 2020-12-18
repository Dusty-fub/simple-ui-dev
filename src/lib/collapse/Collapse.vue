<template>
  <component
    v-for="(item, index) in slotItems"
    :is="item"
    :key="index"
    :changed="slotItems.changed"
  ></component>
  <footer class="gulu-collapse-item-footer"></footer>
</template>
<script lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
export default {
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    let slotItems = reactive(ctx.slots.default());

    slotItems["changed"] = 0;

    if (props.accordion) {
      slotItems.forEach((item, index) => {
        item.props.accordion = true;
        item.props["onAccordionToggle"] = () => {
          slotItems[index].props.autoClose = false;
          slotItems["changed"]++;

          for (let i = 0; i < slotItems.length; i++) {
            if (i !== index) {
              slotItems[i].props.autoClose = true;
              slotItems["changed"]++;
            }
          }
        };
        slotItems["changed"]++;
      });
    }
    return { slotItems };
  },
};
</script>
<style lang="scss">
.gulu-collapse-item-footer {
  border-bottom: 1px solid #ccc;
}
</style>
