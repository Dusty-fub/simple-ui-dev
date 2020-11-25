<demo>
示例4
</demo>
<template>
  <Button
    theme='button'
    disabled
  >按钮</Button>
  <Button
    theme='link'
    :disabled='true'
  >按钮</Button>

  <Button
    theme='text'
    disabled
  >按钮</Button>
</template>

<script>
import Button from "/src/lib/Button.vue";
export default {
  components: { Button },
};
</script>