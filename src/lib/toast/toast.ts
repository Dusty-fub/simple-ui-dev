import Toast from "./Toast.vue";

import { createApp } from "vue";

let fields = {};

export function toast(options) {
  let msg;
  let position = "top";
  if (typeof options === "string") {
    msg = options;
  } else {
    msg = options.msg;
    options["position"] && (position = options["position"]);
  }

  if (fields[`${position}Amount`]) {
    fields[`${position}Amount`]++;
  } else {
    fields[`${position}Amount`] = 1;
  }

  const toastEl = document.createElement("div");

  const onClose = () => {
    toastVm.unmount(toastEl);
    toastEl.remove();
    fields[`${position}Amount`]--;
  };

  const toastVm = createApp(Toast, {
    msg,
    field: {
      position,
      toastAmount: fields[`${position}Amount`],
    },
    onClose,
    type: options["type"],
    isCenter: options["isCenter"],
    autoCloseSeconds: options.autoCloseSeconds,
  });

  toastVm.mount(toastEl);

  document.body.appendChild(toastEl);
}
