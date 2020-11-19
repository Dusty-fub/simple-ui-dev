<template>
  <div class="tabs">
    <h1>示例1</h1>
    <Tabs>
      <Tab
        title="nav1"
        selected
      >content 1</Tab>
      <Tab title="nav2----``````````````````````````">content 2</Tab>
    </Tabs>
  </div>
</template>

<script lang='ts'>
import Tabs from "/@/lib/Tabs.vue";
import Tab from "/@/lib/Tab.vue";
export default {
  props: {
    msg: String,
  },
  setup(props, ctx) {},
  components: {
    Tabs,
    Tab,
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  height: 96px;
}
</style>
