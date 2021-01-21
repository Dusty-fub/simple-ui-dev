<demo>
    示例 4 使用html片段
</demo>
<template>
  <Button @click="showToast">使用html片段</Button>
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
    const { proxy } = getCurrentInstance();
    const showToast = () => {
      proxy.$toast({
        msg: "<strong>这是 <i>HTML</i> 片段</strong>",
        dangerouslyUseHTMLString: true,
      });
    };

    return { showToast };
  },
};
</script>
