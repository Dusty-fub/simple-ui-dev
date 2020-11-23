<template>
  <Demo :component='TabsDemo1' />
</template>

<script lang='ts'>
import Demo from "/@/components/Demo.vue";
import TabsDemo1 from "/@/components/demos/Tabs.demo1.vue";
export default {
  setup() {
    return { TabsDemo1 };
  },
  components: { Demo },
};
</script>
