import { createApp } from "vue";
import "/src/lib/gulu.scss";
import "./index.scss";
import App from "./App.vue";
import { router } from "./router.js";
import "github-markdown-css";
import { toast } from "./lib/toast/toast.ts";

const app = createApp(App);

app.config.globalProperties.$toast = toast;

app.use(router);

app.mount("#app");
