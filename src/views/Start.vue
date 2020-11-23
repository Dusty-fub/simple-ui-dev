<template lang="">
<article class='markdown-body'>
  <h1>
    开始使用
  </h1>

  <p>请先<a href="#/doc/install">安装</a>本组件库。</p>
  <p>然后在你的代码中写入下面的代码</p>
  <pre><code>import {Button, Tabs, Switch, Dialog, openDialog} from "rime-simple-ui";
import "rime-simple-ui/dist/lib/gulu.css";</code></pre>
  <p>就可以使用我提供的组件了。</p>
  <p>使用本框架前，请在css中开启 border-box</p>
  <pre><code>*{box-sizing:border-box;}</code></pre>
  <h2>Vue 单文件组件</h2>
  <p>代码示例：</p>
  <pre><code>&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button} from "rime-simple-ui";
  import "rime-simple-ui/dist/lib/gulu.css";
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </code></pre>

</article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>