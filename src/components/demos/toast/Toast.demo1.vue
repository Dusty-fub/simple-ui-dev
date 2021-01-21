<demo>
    示例 1
</demo>
<template>
  <Button @click="showToast1">打开消息提示</Button>
  <Button @click="showToast2">提示，从底部出现</Button>
  <Button @click="showToast3">提示，1s后消失</Button>
</template>

<script lang="ts">
/**
 * 参数：msg
 * 类型：String
 * 说明：弹框内容
 *
 * 参数：autoCloseSecond
 * 类型：Number/Boolean
 * 默认值：3
 * 说明：弹框显示的时间，如设置为false，则不会消失
 *
 */

import Button from "/src/lib/Button.vue";
import { getCurrentInstance } from "vue";
export default {
  components: { Button },
  setup(props, ctx) {
    const { proxy } = getCurrentInstance();
    const showToast1 = () => {
      proxy.$toast("这是一条消示");
    };
    const showToast2 = () => {
      proxy.$toast({
        msg: "这是一条消示",
        position: "bottom",
      });
    };
    const showToast3 = () => {
      proxy.$toast({
        msg: "这是一条消示",
        position: "bottom",
        autoCloseSeconds: 1,
      });
    };

    return { showToast1, showToast2, showToast3 };
  },
};
</script>
