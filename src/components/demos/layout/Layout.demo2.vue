<demo>
    示例 2
</demo>
<template>
  <div class="layoutDemo">
    <Layout>
      <Header>header</Header>
      <Content>content</Content>
      <Footer>footer</Footer>
    </Layout>
  </div>
</template>

<script lang="ts">
import Layout from "/src/lib/Layout.vue";
import Header from "/src/lib/Header.vue";
import Content from "/src/lib/Content.vue";
import Footer from "/src/lib/Footer.vue";

export default {
  components: { Layout, Header, Content, Footer },
};
</script>

<style>
.layoutDemo {
  height: 300px;
}
</style>
