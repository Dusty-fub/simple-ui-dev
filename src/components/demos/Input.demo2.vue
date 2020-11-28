<demo>
  event
</demo>
<template>
  <Input
    @change='event'
    placeholder="change事件"
  />
  <Input
    @input='event'
    placeholder="input事件"
  />
  <Input
    @focus='event'
    placeholder="focus事件"
  />
  <Input
    @blur='event'
    placeholder="blur事件"
  />
</template>
<script lang='ts'>
import Input from "/src/lib/Input.vue";
export default {
  components: { Input },
  setup() {
    const event = (e) => {
      console.log("event ", e.target.value);
    };
    return { event };
  },
};
</script>
