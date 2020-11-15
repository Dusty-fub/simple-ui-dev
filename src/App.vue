<template>
<router-link to="/hello">hello</router-link>
<div>|</div>
<router-link to="/">jump f</router-link>

<router-view />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
};
</script>
