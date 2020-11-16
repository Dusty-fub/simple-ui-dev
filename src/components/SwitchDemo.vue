<template>
  <div class="switch">
    <Switch v-model:checkedValue="checked" />
  </div>
</template>

<script lang="ts">
import Switch from "/@/lib/Switch.vue";
import { ref } from "vue";
export default {
  name: "SwitchDemo",

  setup() {
    const checked = ref(false);
    return {
      checked,
    };
  },

  components: {
    Switch,
  },
};
</script>

<style lang="scss" scoped>
.switch {
  height: 96px;
}
</style>
