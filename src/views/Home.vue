<template>
  <div class="topNavAndBanner">
    <top-nav />
    <div class="banner">
      <h1>ui</h1>
      <h2>一个框架</h2>
      <p class="actions">
        <a href="#">github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>

</template>

<script lang="ts">
import TopNav from "/@/components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
.topNavAndBanner {
  height: 100%;
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
}
.banner {
  padding: 100px 0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background-color: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
