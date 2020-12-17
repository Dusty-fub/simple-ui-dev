<demo>
    示例 1
</demo>
<template>
  <Popover>
    <Button>上方弹出</Button>
    <template v-slot:content> 要弹出的内容 </template>
  </Popover>
  <Popover position="bottom">
    <Button>下方弹出</Button>
    <template v-slot:content> 要弹出的内容 </template>
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
