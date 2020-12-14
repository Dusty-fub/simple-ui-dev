<demo>
    示例 4 
</demo>
<template>
  <div class="layoutDemo">
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider width='200px'>sider</Sider>
        <Content>content</Content>
      </Layout>
    </Layout>
  </div>
</template>

<script lang="ts">
import Layout from "/src/lib/Layout.vue";
import Header from "/src/lib/Header.vue";
import Sider from "/src/lib/Sider.vue";
import Content from "/src/lib/Content.vue";

export default {
  components: { Layout, Header, Sider, Content },
};
</script>

<style lang='scss' scoped>
.layoutDemo {
  height: 300px;
}
</style>
