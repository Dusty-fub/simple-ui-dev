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
    >
      <template v-slot:content>
        <div>hi</div>
        <div>hello</div>

      </template>
      <template v-slot:title>
        <h3>
          {{title}}
        </h3>
      </template>
    </Dialog>
  </div>
  <div class="dialog">
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang='ts'>
import { ref } from "vue";
import Button from "/@/lib/Button.vue";
import Dialog from "/@/lib/Dialog.vue";
import { openDialog } from "../lib/openDialog";
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
    const title = ref("tip");
    const showDialog = () => {
      openDialog({
        title: "title",
        content: "content",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      showDialog,
      title,
      dialogOk,
      dialogCancel,
      visible,
      toggle,
      closeDialog,
    };
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  height: 96px;
}
</style>
