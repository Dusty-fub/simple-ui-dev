<demo>
    示例 2 弹框类型
</demo>
<template>
  <Button @click="showToast1">成功</Button>
  <Button @click="showToast2">消息</Button>
  <Button @click="showToast3">警告</Button>
  <Button @click="showToast4">错误</Button>
</template>

<script lang="ts">
/**
 *  参数：type
 *  类型：String
 *  可选值：'success'、'tip'、'warning'、'error'
 */

import Button from "/src/lib/Button.vue";
import { getCurrentInstance } from "vue";
export default {
  components: { Button },
  setup(props, ctx) {
    const { proxy } = getCurrentInstance();
    const showToast1 = () => {
      proxy.$toast({
        msg: "成功",
        type: "success",
      });
    };
    const showToast2 = () => {
      proxy.$toast({
        msg: "提示",
        type: "tip",
      });
    };

    const showToast3 = () => {
      proxy.$toast({
        msg: "警告",
        type: "warning",
      });
    };

    const showToast4 = () => {
      proxy.$toast({
        msg: "错误",
        type: "error",
      });
    };

    return { showToast1, showToast2, showToast3, showToast4 };
  },
};
</script>
