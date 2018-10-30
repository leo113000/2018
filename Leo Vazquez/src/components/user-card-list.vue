<template>
    <div>
        <el-button-group>
            <el-button @click="setMostrarSexo('todos')">Mostrar todos</el-button>
            <el-button @click="setMostrarSexo('Hombre')">Mostrar Hombres</el-button>
            <el-button @click="setMostrarSexo('Mujer')">Mostrar Mujeres</el-button>
        </el-button-group>
        <div class="user-card-list">
            <user-card @borrar="borrarPersona" v-for="p in personasPorSexo" :persona="p" :key="p.id"></user-card>
        </div>
    </div>
</template>

<script>

    import userCard from './user-card.vue';

    export default {
        name: 'userCardList',
        components: {
		    userCard
	    },
        mounted () {
            this.personas = JSON.parse(localStorage.getItem('people') || null ) || [];
        },
        data: function() {
            return {
                personas: [],
                mostrarSoloSexo: 'todos'
            }
        },
        computed: {
            personasPorSexo(){
                if(this.mostrarSoloSexo !== 'todos'){
                    return this.personas.filter( p => p.sexo === this.mostrarSoloSexo);
                }
                return this.personas;
            }
        },
        methods: {
            borrarPersona(id){
                console.log(id);
                this.personas = this.personas.filter( persona => persona.id !== id );
                localStorage.setItem('people', JSON.stringify(this.personas));
		    },
            setMostrarSexo(sexo){
                this.mostrarSoloSexo = sexo;
            }
        }
    }
</script>
