<demo>
    示例 1
</demo>
<template>
  <Button @click="showToast1">打开消息提示</Button>
  <Button @click="showToast2">打开消息提示</Button>
</template>

<script lang="ts">
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
      instance.ctx.$toast("这这是息提示这是一条消示", "bottom");
    };
    return { showToast1, showToast2 };
  },
};
</script>

<style lang="ts" scoped></style>
