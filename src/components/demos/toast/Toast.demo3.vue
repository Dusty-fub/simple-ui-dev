<demo>
    示例 3 控制弹框内容局中
</demo>
<template>
  <Button @click="showToast">居中</Button>
</template>

<script lang="ts">
/**
 *  参数：isCenter
 *  说明：图标文字是否居中
 *  类型：Boolean
 *  默认值：false
 */

import Button from "/src/lib/Button.vue";
import { getCurrentInstance } from "vue";
export default {
  components: { Button },
  setup(props, ctx) {
    const { proxy } = getCurrentInstance();
    const showToast = () => {
      proxy.$toast({
        msg: "图标文字居中",
        isCenter: true,
      });
    };

    return { showToast };
  },
};
</script>
