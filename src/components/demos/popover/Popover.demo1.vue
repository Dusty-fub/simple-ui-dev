<demo>
    示例 1
</demo>
<template>
  <Popover position="top">
    <Button>上方弹出</Button>
  </Popover>
</template>
<script lang="ts">
import Popover from "/src/lib/popover/Popover.vue";
import Button from "/src/lib/Button.vue";
export default {
  components: { Popover, Button },
};
</script>
<style lang="scss" scoped></style>
