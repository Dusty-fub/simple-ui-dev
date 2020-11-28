<demo>
  event
</demo>
<template>
  <Input
    value="zzz"
    v-model='msg'
    placeholder="双向绑定"
  />
  {{msg}}
</template>
<script lang='ts'>
import { ref } from "vue";
import Input from "/src/lib/Input.vue";
export default {
  components: { Input },
  setup() {
    let msg = ref("emm");
    return { msg };
  },
};
</script>
