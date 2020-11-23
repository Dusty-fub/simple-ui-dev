<template>
  <div class="bottom-nav">
    <router-link :to='leftJump'>{{leftJump!==''?'← '+aTexts[leftJump]:''}}
    </router-link>
    <router-link :to='rightJump'>{{rightJump!==''?aTexts[rightJump]+' →':''}}
    </router-link>
  </div>
</template>
<script lang='ts'>
export default {
  props: {
    leftJump: {
      type: String,
      default: "",
    },
    rightJump: {
      type: String,
      default: "",
    },
  },
  setup() {
    const aTexts = {
      "/doc/dialog": "dialog组件",
      "/doc/switch": "switch组件",
      "/doc/tabs": "tabs组件",
      "/doc/button": "button组件",
      "/doc/start": "开始使用",
      "/doc/install": "安装",
      "/doc/intro": "介绍",
    };
    return { aTexts };
  },
};
</script>
<style lang="scss" scoped>
.bottom-nav {
  display : flex;
  justify-content : space-between;
  > a {
    margin : 0 30px 70px;
    text-decoration : none;
  }
}

</style>