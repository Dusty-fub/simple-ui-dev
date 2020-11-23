<demo>
常规用法
</demo>
<template >
  <Switch v-model:checkedValue="checked" />
</template>
<script lang="ts">
import Switch from "/@/lib/Switch.vue";
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(false);
    return { checked };
  },
  components: { Switch },
};
</script>
