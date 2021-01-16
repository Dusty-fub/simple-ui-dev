<demo>
支持 disabled
</demo>
<template >
  <Switch
    v-model:checkedValue="checked"
    disabled
  />
</template>
<script lang='ts'>
import Switch from "/src/lib/Switch.vue";
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(true);
    return { checked };
  },
  components: { Switch },
};
</script> 