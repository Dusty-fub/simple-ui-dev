<template>
  <div class="buttonDemo">
    <Button
      theme="button"
      size="normal"
      @click="onClick"
      @mouseover="onMouseOver"
      @focus="onFocus"
    >
      按钮
    </Button>
    <Button> 按钮 </Button>
    <Button theme="link"> 按钮 </Button>
    <Button theme="text"> 按钮 </Button>
    <hr style="margin: 30px" />
    <Button size="big">按钮</Button>
    <Button size="normal">按钮</Button>
    <Button size="small">按钮</Button>
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
