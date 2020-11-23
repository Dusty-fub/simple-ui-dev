<demo>
示例1
</demo>
<template>
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
</template>

<script lang='ts'>
import { ref } from "vue";
import Button from "/@/lib/Button.vue";
import Dialog from "/@/lib/Dialog.vue";
export default {
  components: { Dialog, Button },
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

    return {
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

