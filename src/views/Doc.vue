<template>
<div>
    <top-nav />
    <div class="content">
        <aside v-show="asideVi">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/switch">Switch 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">Dialog 组件</router-link>
                </li>
                s
                <li>
                    <router-link to="/doc/tabs">Tabs 组件</router-link>
                </li>
            </ol>
        </aside>
        <main>主内容</main>
    </div>
</div>
<h1>doc page</h1>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import {
    inject,
    Ref
} from "vue";
export default {
    components: {
        TopNav,
    },
    setup() {
        const asideVi = inject < Ref < boolean >> ("asideVi");
        return {
            asideVi,
        };
    },
};
</script>

<style lang="scss">
aside {
    background-color: hsl(180, 70%, 50%);
    width: 150px;
    padding: 16px;

    >h2 {
        margin-bottom: 4px;
    }

    >ol {
        >li {
            padding: 4px 0;
        }
    }

    @media (max-width: 500px) {
        position: fixed;
        left: 0;
    }
}
</style>
