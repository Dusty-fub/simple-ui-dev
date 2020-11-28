<demo>
demo 1
</demo>
<template>
  <Input />
  <Input value='john' />
  <Input
    value='john'
    disabled
  />
  <Input
    value='john'
    readonly
  />
  <Input
    value='john'
    error
  />
</template>
<script lang='ts'>
import Input from "/src/lib/Input.vue";
export default {
  components: { Input },
};
</script>
<style lang="scss" scoped>
</style>