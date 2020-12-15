<demo>
    示例 1
</demo>
<template>
  <Button @click="showToast1">打开消息提示</Button>
  <Button @click="showToast2">打开消息提示</Button>
  <Button @click="showToast3">打开消息提示</Button>
</template>

<script lang="ts">
/**
 * 默认从顶部出现
 *  可以设置从顶部、底部、中间、右上、右下、左上、坐下出现
 * 默认3秒后消失，可以设置消失的时间，或者不消失
 *
 * 当前若存在弹框，再次触发弹框，默认新弹框和旧弹框同时显示
 *  可以设置新弹框替代旧弹框
 *  可以设置最多同时可以显示弹框数量
 *
 */

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
