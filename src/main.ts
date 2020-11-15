import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import F from './components/F.vue';
import HelloWorld from './components/HelloWorld.vue';

import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {
            path:'/',component:F
        },
        {
            path:'/hello',component:HelloWorld
        }
    ]
});

const app = createApp(App);

app.use(router)

app.mount("#app");
