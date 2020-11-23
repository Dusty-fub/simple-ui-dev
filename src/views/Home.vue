<template>
  <div class="wrap">
    <div class="topNavAndBanner">
      <top-nav />
      <div class="banner">
        <h1>ui</h1>
        <h2>一个框架</h2>
        <p class="actions">
          <a href="#">github</a>
          <router-link to="/doc/intro">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>

        <li>
          <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 vue3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>

    </div>

  </div>

</template>

<script lang="ts">
import TopNav from "/@/components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
  beforeRouteEnter(to, from, next) {
    document.title = "simple ui | 首页";
    next();
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  .topNavAndBanner {
    height: 50%;
    background: linear-gradient(
      145deg,
      rgba(227, 255, 253, 1) 0%,
      rgba(183, 233, 230, 1) 100%
    );
    clip-path: ellipse(80% 60% at 50% 40%);
  }

  .features {
    height: 50%;
    margin: 0px auto;
    margin: 0px auto;

    @media (min-width: 800px) {
      width: 800px;
      > ul {
        li {
          width: 50%;
        }
      }
    }
    @media (min-width: 1200px) {
      width: 1200px;
      > ul {
        li {
          width: 33.33%;
        }
      }
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      @media (max-width: 800px) {
        justify-content: center;
      }
      > li {
        width: 400px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas: "icon title" "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;

        > svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }
        > h3 {
          grid-area: title;
          font-size: 28px;
        }
        > p {
          grid-area: text;
        }
      }
    }
  }
}

.banner {
  padding: 100px 0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #28d1c9;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background-color: hsl(150, 90%, 45%);
      color: white;
      display: inline-block;
      height: 40px;
      line-height: 24px;
      border-radius: 4px;
      padding: 8px 24px;
    }
  }
}
</style>
