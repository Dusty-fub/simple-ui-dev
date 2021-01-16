<demo>
    示例 2
</demo>
<template>
  <Button @click="showToast1">成功</Button>
  <Button @click="showToast2">消息</Button>
  <Button @click="showToast3">警告</Button>
  <Button @click="showToast4">错误</Button>
</template>

<script lang="ts">
/**
 *
 */

import Button from "/src/lib/Button.vue";
import { getCurrentInstance } from "vue";
export default {
  components: { Button },
  setup(props, ctx) {
    const instance = getCurrentInstance();
    const showToast1 = () => {
      instance.ctx.$toast({
        msg: "成功",
        type: "success",
      });
    };
    const showToast2 = () => {
      instance.ctx.$toast({
        msg: "提示",
        type: "tip",
      });
    };

    const showToast3 = () => {
      instance.ctx.$toast({
        msg: "警告",
        type: "warning",
      });
    };

    const showToast4 = () => {
      instance.ctx.$toast({
        msg: "错误",
        type: "error",
      });
    };

    return { showToast1, showToast2, showToast3, showToast4 };
  },
};
</script>

<style lang="ts" scoped></style>
