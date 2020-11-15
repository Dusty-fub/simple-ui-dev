<template>
<router-link to="/doc">文档</router-link>
<div>|</div>
<router-link to="/">主页</router-link>

<router-view />
</template>

<script>
export default {
    name: "App",
};
</script>
