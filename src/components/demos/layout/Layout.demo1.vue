<demo>
    示例 1
</demo>
<template>
  <div class="layoutDemo">
    <Layout>
      <Header>header</Header>
      <Content>content</Content>
    </Layout>
  </div>
</template>

<script lang="ts">
import Layout from "/src/lib/Layout.vue";
import Header from "/src/lib/Header.vue";
import Content from "/src/lib/Content.vue";

export default {
  components: { Layout, Header, Content },
};
</script>

<style>
.layoutDemo {
  height: 300px;
}
</style>
