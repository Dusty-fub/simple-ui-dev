//@ts-ignore
import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";

export const openDialog = (options) => {
  const { title, content, ok, cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          onCloseDialog() {
            close();
          },
          onDialogOk() {
            ok();
            close();
          },
          onDialogCancel() {
            cancel();
            close();
          },
        },

        { title: title, content }
      );
    },
  });
  app.mount(div);
};
