<demo>
    示例 5
</demo>
<template>
  <div class="layoutDemo">
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider width='200px'>sider</Sider>
        <Layout>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script lang="ts">
import Layout from "/src/lib/Layout.vue";
import Header from "/src/lib/Header.vue";
import Sider from "/src/lib/Sider.vue";
import Content from "/src/lib/Content.vue";
import Footer from "/src/lib/Footer.vue";

export default {
  components: { Layout, Header, Sider, Content, Footer },
};
</script>

<style lang='scss' scoped>
.layoutDemo {
  height: 300px;
}
</style>
