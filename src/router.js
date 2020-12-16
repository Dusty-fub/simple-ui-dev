import { createWebHashHistory, createRouter } from "vue-router";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import InputDemo from "./components/InputDemo.vue";
import GridDemo from "./components/GridDemo.vue";
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
          component: SwitchDemo,
        },
        {
          path: "button",
          component: ButtonDemo,
        },
        {
          path: "dialog",
          component: DialogDemo,
        },
        {
          path: "Tabs",
          component: TabsDemo,
        },
        {
          path: "Input",
          component: InputDemo,
        },
        {
          path: "grid",
          component: GridDemo,
        },
        {
          path: "layout",
          component: () => import("./components/LayoutDemo.vue"),
        },
        {
          path: "toast",
          component: () => import("./components/demoMap/ToastDemo.vue"),
        },
        {
          path: "popover",
          component: () => import("./components/demoMap/PopoverDemo.vue"),
        },
      ],
    },
  ],
});
