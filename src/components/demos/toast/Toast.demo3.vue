<demo>
    示例 3
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
    const instance = getCurrentInstance();
    const showToast = () => {
      instance.ctx.$toast({
        msg: "图标文字居中",
        isCenter: true,
      });
    };

    return { showToast };
  },
};
</script>

<style lang="ts" scoped></style>
