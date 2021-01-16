<template>
  <top-nav toggleMenuButtonVisible />
  <div class="content">
    <aside v-show="asideVi">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro"> 介绍 </router-link>
        </li>
        <li>
          <router-link to="/doc/install"> 安装 </router-link>
        </li>
        <li>
          <router-link to="/doc/start"> 开始使用 </router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li
          v-for="item in componentsLis"
          :key="item.link"
        >
          <router-link :to="'/doc/' + item.link">{{ item.text }}</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import { inject, reactive, Ref } from "vue";
export default {
  components: { TopNav },
  setup() {
    const asideVi = inject<Ref<boolean>>("asideVi");

    const componentsLis = reactive([
      {
        link: "switch",
        text: "Switch 组件",
      },
      {
        link: "button",
        text: "Button 组件",
      },
      {
        link: "dialog",
        text: "Dialog 组件",
      },
      {
        link: "tabs",
        text: "Tabs 组件",
      },
      {
        link: "input",
        text: "Input 组件",
      },
      {
        link: "grid",
        text: "Grid 栅格",
      },
      {
        link: "layout",
        text: "layout 布局",
      },
      {
        link: "toast",
        text: "Toast 弹框提示",
      },
      {
        link: "popover",
        text: "Popover 弹出层",
      },
      {
        link: "collapse",
        text: "Collapse折叠面板",
      },
    ]);

    return { asideVi, componentsLis };
  },
  beforeRouteEnter(to, from, next) {
    document.title = "simple ui | 文档";
    next();
  },
};
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  overflow: auto;
  display: flex;
  align-items: flex-start;

  aside {
    background-color: #b097a1;
    width: 150px;
    margin-right: 10px;
    box-shadow: 0 0 10px rgba(200, 175, 208, 0.7);
    height: 100%;
    max-height: 100%;
    overflow: auto;

    > h2 {
      padding: 16px;
      margin-bottom: 4px;
    }

    > ol {
      > li {
        > a {
          text-decoration: none;
          line-height: 21px;
          display: block;
          padding: 4px 16px;
          font-size: 14px;
        }
        a:hover {
          color: #fcc5ba;
        }
        .router-link-active {
          color: #fcc5ba;
          box-shadow: 0 0 2px #fcc5ba;
        }
      }
    }

    @media (max-width: 500px) {
      position: fixed;
      left: 0;
      z-index: 1;
    }
  }

  main {
    flex: 1;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    margin-left: 0.5em;
  }
}
</style>
