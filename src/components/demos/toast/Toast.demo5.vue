<demo>
    示例 5
</demo>
<template>
  <Button @click="showToast">手动关闭</Button>
</template>

<script lang="ts">
/**
 *  参数：showClose
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
        msg: "手动关闭",
        showClose: true,
      });
    };

    return { showToast };
  },
};
</script>

<style lang="ts" scoped></style>
