<template>
<h1>doc page</h1>
<div>
    <top-nav />
    <div class="content">
        <aside>边栏</aside>
        <main>主内容</main>
    </div>
</div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
    components: {
        TopNav,
    },
};
</script>
