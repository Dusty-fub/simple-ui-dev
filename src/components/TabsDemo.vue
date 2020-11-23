<template>
  <Demo :component='TabsDemo1' />
  <BottomNav leftJump='/doc/dialog' />
</template>

<script lang='ts'>
import Demo from "/@/components/Demo.vue";
import BottomNav from "/@/components/BottomNav.vue";
import TabsDemo1 from "/@/components/demos/Tabs.demo1.vue";
export default {
  setup() {
    return { TabsDemo1 };
  },
  components: { Demo, BottomNav },
};
</script>
