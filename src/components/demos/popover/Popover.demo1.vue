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
  <Popover position="left">
    <Button>左方弹出</Button>
    <template v-slot:content> 要弹出的内容 </template>
  </Popover>
  <Popover position="right">
    <Button>右方弹出</Button>
    <template v-slot:content> 要弹出的内容 </template>
  </Popover>
</template>
<script lang="ts">
/**
 *  参数：position
 *  类型：String
 *  默认值：'top'
 *  可选值：'top'、'bottom'、'left'、'right'
 */
import Popover from "/src/lib/popover/Popover.vue";
import Button from "/src/lib/Button.vue";
export default {
  components: { Popover, Button },
};
</script>
<style lang="scss" scoped></style>
