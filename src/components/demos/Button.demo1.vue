<demo>
示例1
</demo>
<template>
  <Button
    theme="button"
    size="normal"
  >
    按钮
  </Button>
  <Button> 按钮 </Button>
  <Button theme="link"> 按钮 </Button>
  <Button theme="text"> 按钮 </Button>
</template>

<script>
import Button from "/@/lib/Button.vue";
export default {
  components: { Button },
};
</script>