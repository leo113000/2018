<template>
    <div class="card">
        <a @click="$emit('borrar',persona.id)">{{ persona.nombre }} {{ persona.edad }} {{ persona.sexo }}</a>
    </div>
</template>

<script>
    export default {
        name: 'userCard',
        props: ['persona']
    }
</script>

<style>
    .card {
        color: green;
        padding-top: 30px;
    }
</style>
