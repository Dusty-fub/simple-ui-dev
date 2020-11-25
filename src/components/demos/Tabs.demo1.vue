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
import Tabs from "/src/lib/Tabs.vue";
import Tab from "/src/lib/Tab.vue";
export default {
  components: { Tabs, Tab },
};
</script>
