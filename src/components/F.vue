<template>
<h1>{{ msg }}</h1>
<button @click="count++">count is: {{ count }}</button>
</template>

<script>
export default {
    name: "F",
    data() {
        return {
            msg: "component f",
            count: 0,
        };
    },
};
</script>
