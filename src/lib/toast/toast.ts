import Toast from "./Toast.vue";

import { createApp } from "vue";
export function toast(msg, position) {
  const toastEl = document.createElement("div");

  const toastVm = createApp(Toast, { msg, position });

  toastVm.mount(toastEl);

  document.body.appendChild(toastEl);
}
