<template>
    <div>
        <el-tag closable @close="$emit('borrar',persona.id)"> {{ persona.nombre }} {{ persona.edad }} {{ persona.sexo }} </el-tag>
    </div>
</template>

<script>
    export default {
        name: 'userCard',
        props: ['persona'],
        
    }
</script>

<style>
    .card {
        color: green;
        padding-top: 30px;
    }
</style>
