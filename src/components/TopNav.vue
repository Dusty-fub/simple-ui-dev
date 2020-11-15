<template>
<div class="topnav">
    <div class="logo" @click="toggleAside">Logo</div>
    <ul class="menu">
        <li>menu1</li>
        <li>menu2</li>
    </ul>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from "vue";

export default {
    name: "TopNav",
    setup() {
        const asideVi = inject < Ref < boolean >> ("asideVi");
        const toggleAside = () => {
            asideVi.value = !asideVi.value;
        };
        return {
            toggleAside
        };
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;

    padding: 16px;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }
}
</style>
