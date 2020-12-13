<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="compnentDemo">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode"> {{ codeVisible ? "隐藏" : "查看" }}代码 </Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="codeHtml"></pre>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
export default {
  props: {
    component: Object,
  },
  setup(props) {
    const userCode = props.component.__sourceCode
      .replace(
        /import ([A-Za-z]*) from ["']\/src\/lib\/([A-Za-z]*)\.vue["']/g,
        'import {$1} from "rime-simple-ui"'
      )
      .replace("/@/lib/openDialog", "rime-simple-ui")
      .replace("export", `import "rime-simple-ui/dist/lib/gulu.css";\nexport`);

    const codeHtml = computed(() => {
      return Prism.highlight(userCode, Prism.languages.html, "html");
    });

    const codeVisible = ref(false);
    const toggleCode = () => {
      codeVisible.value = !codeVisible.value;
    };

    return { codeHtml, Prism, codeVisible, toggleCode };
  },
  components: {
    Button,
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 30px 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  .compnentDemo {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
