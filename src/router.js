import { createWebHashHistory, createRouter } from "vue-router";
import Doc from "./views/Doc.vue";

import DialogDemo from "./components/DialogDemo.vue";

import Intro from "./views/Intro.vue";
import Start from "./views/Start.vue";
import Install from "./views/Install.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
      alias: "/home",
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "start",
          component: Start,
        },
        {
          path: "intro",
          component: Intro,
        },

        {
          path: "install",
          component: Install,
        },
        {
          path: "switch",
          component: () => import("./components/demoMap/SwitchDemo.vue"),
        },
        {
          path: "button",
          component: () => import("./components/demoMap/ButtonDemo.vue"),
        },
        {
          path: "dialog",
          component: () => import("./components/demoMap/DialogDemo.vue"),
        },
        {
          path: "Tabs",
          component: () => import("./components/demoMap/TabsDemo.vue"),
        },
        {
          path: "Input",
          component: () => import("./components/demoMap/InputDemo.vue"),
        },
        {
          path: "grid",
          component: () => import("./components/demoMap/GridDemo.vue"),
        },
        {
          path: "layout",
          component: () => import("./components/demoMap/LayoutDemo.vue"),
        },
        {
          path: "toast",
          component: () => import("./components/demoMap/ToastDemo.vue"),
        },
        {
          path: "popover",
          component: () => import("./components/demoMap/PopoverDemo.vue"),
        },
        {
          path: "collapse",
          component: () => import("./components/demoMap/CollapseDemo.vue"),
        },
      ],
    },
  ],
});
