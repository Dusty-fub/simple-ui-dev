import Toast from "./Toast.vue";

import { createApp } from "vue";
export function toast(options) {
  let msg;
  if (typeof options === "string") {
    msg = options;
  } else {
    msg = options.msg;
  }

  const toastEl = document.createElement("div");

  const onClose = () => {
    toastVm.unmount(toastEl);
    toastEl.remove();
  };

  const toastVm = createApp(Toast, {
    msg,
    position: options.position,
    onClose,
    autoCloseSeconds: options.autoCloseSeconds,
  });

  toastVm.mount(toastEl);

  document.body.appendChild(toastEl);
}
