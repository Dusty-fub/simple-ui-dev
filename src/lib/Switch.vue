<template>
<div>
    switch component
    <button :class="{
        checked,
      }" @click="checked = !checked">
        <span></span>
    </button>
</div>
</template>

<script lang="ts">
import {
    ref
} from "vue";
export default {
    setup() {
        const checked = ref(false);
        return {
            checked,
        };
    },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
    height: $h;
    width: $h * 2;
    border: none;
    outline: none;
    background-color: gray;
    border-radius: $h/2;
    position: relative;
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: $h2/2;
    transition: left 0.4s;
}

.checked {
    background-color: hsl(222, 100%, 60%);

    >span {
        left: calc(100% - #{$h2} - 2px);
    }
}
</style>
