import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
      alias: "/home",
    },
    {
      path: "/doc",
      component: Doc,
      children: [
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
      ],
    },
  ],
});
