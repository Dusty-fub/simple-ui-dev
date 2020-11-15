<template>
<h1>home page</h1>
<div>
    <top-nav />
    <div class="banner">
        <h1>ui</h1>
        <h2>一个框架</h2>
        <p class="actions">
            <a href="">github</a>
            <a href="">开始</a>
        </p>
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
