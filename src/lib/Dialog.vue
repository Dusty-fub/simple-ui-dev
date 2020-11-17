<template>
  <div class="gulu-dialog-overlay">
  </div>
  <div class="gulu-dialog-wrapper">
    <header>
      标题
    </header>
    <main>
      <p>first line</p>
      <p>second line</p>
    </main>
    <footer>
      <Button>ok</Button>
      <Button>cancel</Button>
    </footer>
  </div>

</template>

<script lang="ts">
import { computed, ref } from "vue";
import Button from "./Button.vue";

export default {
  inheritAttrs: false,
  components: { Button },
  props: {},
  setup(props, context) {},
};
</script>

<style lang="scss">
</style>
