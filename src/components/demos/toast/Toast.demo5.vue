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
    const { proxy } = getCurrentInstance();
    const showToast = () => {
      proxy.$toast({
        msg: "手动关闭",
        showClose: true,
      });
    };

    return { showToast };
  },
};
</script>

