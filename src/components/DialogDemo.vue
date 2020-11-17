<template>
  <div class="dialog">
    <h1>示例1</h1>
    <Dialog></Dialog>
  </div>
</template>

<script lang='ts'>
import Dialog from "/@/lib/Dialog.vue";
export default {
  name: "DialogDemo",
  components: { Dialog },
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  height: 996px;
}
</style>
