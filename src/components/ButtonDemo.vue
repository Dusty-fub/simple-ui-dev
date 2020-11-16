<template>
  <div class="buttonDemo">
    <Button
      theme="button"
      @click="onClick"
      @mouseover="onMouseOver"
      @focus="onFocus"
    >
      按钮
    </Button>
  </div>
</template>

<script>
import Button from "/@/lib/Button.vue";
export default {
  name: "ButtonDemo",
  props: {
    msg: String,
  },
  setup() {
    const onClick = () => {
      alert("al");
    };
    return { onClick };
  },
  components: { Button },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.buttonDemo {
  height : 96px;
}

</style>
