<template>
<div class="switch">
    <Switch />
</div>
</template>

<script lang="ts">
import Switch from "/@/lib/Switch.vue";
export default {
    name: "SwitchDemo",
    props: {
        msg: String,
    },
    data() {
        return {};
    },
    components: {
        Switch,
    },
};
</script>

<style lang="scss" scoped>
.switch {
    height: 96px;
}
</style>
