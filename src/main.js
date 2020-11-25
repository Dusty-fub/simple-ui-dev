import { createApp } from "vue";
import "/src/lib/gulu.scss";
import "./index.scss";
import App from "./App.vue";
import { router } from "./router.js";
import "github-markdown-css";

const app = createApp(App);

app.use(router);

app.mount("#app");
