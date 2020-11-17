<template>
  <div class="dialog">
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog
      :visible='visible'
      @closeDialog='closeDialog'
      @dialogOk='dialogOk'
      @dialogCancel='dialogCancel'
      :closeOnClickOverlay='false'
    ></Dialog>
  </div>
</template>

<script lang='ts'>
import { ref } from "vue";
import Button from "/@/lib/Button.vue";
import Dialog from "/@/lib/Dialog.vue";
export default {
  name: "DialogDemo",
  components: { Dialog, Button },
  props: {
    msg: String,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const closeDialog = () => {
      visible.value = false;
    };
    const dialogOk = () => {
      closeDialog();
    };
    const dialogCancel = () => {
      closeDialog();
    };
    return { dialogOk, dialogCancel, visible, toggle, closeDialog };
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  height: 996px;
}
</style>
