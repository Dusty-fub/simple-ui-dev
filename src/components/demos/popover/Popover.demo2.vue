<demo>
    示例 2
</demo>
<template>
  <Popover>
    <Button>click触发</Button>
    <template v-slot:content> 要弹出的内容 </template>
  </Popover>
  <Popover trigger="focus">
    <Button>focus弹出</Button>
    <template v-slot:content> 要弹出的内容 </template>
  </Popover>
  <Popover trigger="hover">
    <Button>hover弹出</Button>
    <template v-slot:content> 要弹出的内容 </template>
  </Popover>
</template>
<script lang="ts">
/**
 *  参数：trigger
 *  类型：String
 *  默认值：'click'
 *  可选值：'click'、'focus'、'hover'
 */
import Popover from "/src/lib/popover/Popover.vue";
import Button from "/src/lib/Button.vue";
export default {
  components: { Popover, Button },
};
</script>
<style lang="scss" scoped></style>
