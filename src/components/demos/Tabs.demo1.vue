<demo>
示例1
</demo>
<template>
  <Tabs>
    <Tab
      title="nav1"
      selected
    >content 1</Tab>
    <Tab title="nav2">content 2</Tab>
  </Tabs>
</template>

<script lang='ts'>
import Tabs from "/@/lib/Tabs.vue";
import Tab from "/@/lib/Tab.vue";
export default {
  components: { Tabs, Tab },
};
</script>
