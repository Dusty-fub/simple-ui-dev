<demo>
    示例 3
</demo>
<template>
  <div class="layoutDemo">
    <Layout>
      <Sider width='200px'>sider</Sider>
      <Content>content</Content>
    </Layout>
  </div>
</template>

<script lang="ts">
import Layout from "/src/lib/Layout.vue";
import Sider from "/src/lib/Sider.vue";
import Content from "/src/lib/Content.vue";

export default {
  components: { Layout, Sider, Content },
};
</script>

<style lang='scss' scoped>
.layoutDemo {
  height: 300px;
}
</style>
