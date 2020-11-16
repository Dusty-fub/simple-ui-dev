<template>
  <div class="buttonDemo">
    <h1>示例1</h1>
    <div class="buttonWrap">
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
    </div>
  </div>
  <div class="buttonDemo">
    <h1>示例2</h1>
    <div class="buttonWrap">
      <Button size="big">按钮</Button>
      <Button size="normal">按钮</Button>
      <Button size="small">按钮</Button>
    </div>
  </div>
  <div class="buttonDemo">
    <h1>示例3</h1>
    <div class="buttonWrap">
      <div class="buttonRow">
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
      </div>

      <div class="buttonRow">
        <Button
          theme="link"
          level="main"
        >主要链接按钮</Button>
        <Button theme="link">普通链接按钮</Button>
        <Button
          theme="link"
          level="danger"
        >危险链接按钮</Button>
      </div>

      <div class="buttonRow">
        <Button
          theme="text"
          level="main"
        >主要文字按钮</Button>
        <Button theme="text">普通文字按钮</Button>
        <Button
          theme="text"
          level="danger"
        >危险文字按钮</Button>
      </div>
    </div>
  </div>
  <div class="buttonDemo">
    <h1>示例4</h1>
    <div class="buttonWrap">
      <Button
        theme='button'
        disabled
      >按钮</Button>
      <Button
        theme='link'
        :disabled='true'
      >按钮</Button>

      <Button
        theme='text'
        disabled
      >按钮</Button>
    </div>
  </div>
  <div class="buttonDemo">
    <h1>示例5</h1>
    <div class="buttonWrap">
      <Button loading>
        加载中...
      </Button>
    </div>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  .buttonWrap {
    margin-top: 5px;
    margin-left: 25px;
    .buttonRow {
      padding: 10px 0;
    }
  }
}
</style>
