<demo>
    示例 1
</demo>
<template>
  <Button @click="showToast1">打开消息提示</Button>
  <Button @click="showToast2">打开消息提示</Button>
  <Button @click="showToast3">打开消息提示</Button>
</template>

<script lang="ts">
import Button from "/src/lib/Button.vue";
import { getCurrentInstance } from "vue";
export default {
  components: { Button },
  setup(props, ctx) {
    const instance = getCurrentInstance();
    const showToast1 = () => {
      instance.ctx.$toast("这这是息提示这是一条消示");
    };
    const showToast2 = () => {
      instance.ctx.$toast({
        msg: "这这是息提示这是一条消示",
        position: "bottom",
      });
    };

    const showToast3 = () => {
      instance.ctx.$toast({
        msg: "这这是息提示这是一条消示",
        position: "bottom",
        autoCloseSeconds: 2,
      });
    };

    return { showToast1, showToast2, showToast3 };
  },
};
</script>

<style lang="ts" scoped></style>
