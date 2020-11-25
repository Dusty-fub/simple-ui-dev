<demo>
加载 示例
</demo>
<template>
  <Button lineLoading>加载中...</Button>
  <Button
    lineLoading
    iconPosition='right'
  >
    加载中...
  </Button>
  <Button> 加载完毕 </Button>
  <Button dotLoading>加载中...</Button>
  <Button
    dotLoading
    iconPosition='right'
  >加载中...</Button>
  <Button
    @click="lineLoadTr"
    :lineLoading='isLineLoading'
    iconPosition='right'
  >{{isLineLoading?'加载中...':'加载完毕'}}</Button>
  <Button
    @click="dotLoadTr"
    :dotLoading='isDotLoading'
    iconPosition='right'
  >{{isDotLoading?'加载中...':'加载完毕'}}</Button>
</template>

<script>
import { ref } from "vue";
import Button from "/src/lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const isDotLoading = ref(false);
    const isLineLoading = ref(false);
    const lineLoadTr = () => {
      isLineLoading.value = !isLineLoading.value;
    };
    const dotLoadTr = () => {
      isDotLoading.value = !isDotLoading.value;
    };
    return { isDotLoading, isLineLoading, dotLoadTr, lineLoadTr };
  },
};
</script>