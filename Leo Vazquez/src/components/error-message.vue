<template>
    <div class="error">
        <h2 v-for="(e, index) in errores" :key="index">
            {{e}}
        </h2>
    </div>
</template>

<script>
    export default {
        name: 'errorMessage',
        props: ['errores']
    }
</script>

<style>
    .error {
        background-color: red;
    }
</style>
