<template>
  <Demo :component='TabsDemo1' />
  <BottomNav leftJump='/doc/dialog' />
</template>

<script lang='ts'>
import Demo from "/src/components/Demo.vue";
import BottomNav from "/src/components/BottomNav.vue";
import TabsDemo1 from "/src/components/demos/Tabs.demo1.vue";
export default {
  setup() {
    return { TabsDemo1 };
  },
  components: { Demo, BottomNav },
};
</script>
