<demo>
    示例 6
</demo>
<template>
  <Button @click="showToast1">右上角</Button>
  <Button @click="showToast2">右下角</Button>
  <Button @click="showToast3">左上角</Button>
  <Button @click="showToast4">左下角</Button>
</template>

<script lang="ts">
/**
 *  参数：position
 *  类型：String
 *  默认值：'top'
 *  可选值：'bottom'、'top-right'、'bottom-right'、'top-left'、'bottom-left'
 */

import Button from "/src/lib/Button.vue";
import { getCurrentInstance } from "vue";
export default {
  components: { Button },
  setup(props, ctx) {
    const { proxy } = getCurrentInstance();
    const showToast1 = () => {
      proxy.$toast({
        msg: "手动关闭",
        position: "top-right",
      });
    };
    const showToast2 = () => {
      proxy.$toast({
        msg: "手动关闭",
        position: "bottom-right",
      });
    };
    const showToast3 = () => {
      proxy.$toast({
        msg: "手动关闭",
        position: "top-left",
      });
    };
    const showToast4 = () => {
      proxy.$toast({
        msg: "手动关闭",
        position: "bottom-left",
      });
    };

    return { showToast1, showToast2, showToast3, showToast4 };
  },
};
</script>

