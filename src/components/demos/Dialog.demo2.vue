<demo>
示例2
</demo>
<template>
  <Button @click="showDialog">show</Button>
</template>

<script lang='ts'>
import Button from "/src/lib/Button.vue";
import { openDialog } from "/src/lib/openDialog";
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "title",
        content: "content",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };

    return { showDialog };
  },
};
</script>