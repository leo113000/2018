<template>
    <el-form>
        <error :errores="errores"/>			
        
        <el-form-item label="Nombre">
            <el-input placeholder="Nombre" type="text" v-model="persona.nombre"></el-input>
        </el-form-item>
        <el-form-item label="Edad">
            <el-input-number v-model="persona.edad" :min="4" :max="120"></el-input-number>
        </el-form-item>
        
        <el-form-item label="Sexo">
            <el-radio v-model="persona.sexo" label="Hombre">Hombre</el-radio>
            <el-radio v-model="persona.sexo" label="Mujer">Mujer</el-radio>
        </el-form-item>
        
        <el-button type="primary" @click="nuevaPersona()">Agregar</el-button>
    
    </el-form>
</template>

<script>
import errorMessage from '@/components/error-message';
    export default {
        name: 'userForm',
        components: {
            error: errorMessage
        },
        data: function() {
            return{
                errores:[],
                persona: {
                    id:0,
                    nombre: "",
                    edad: 0,
                    sexo: ""
                }
            }
        },
        methods:{
            nuevaPersona(){
                if(this.camposValidos()){
                    const people = JSON.parse(localStorage.getItem('people') || null) || [];
                    this.persona.id = people.length ? (people[people.length-1].id + 1) : 1;
                    people.push({...this.persona});
                    localStorage.setItem('people', JSON.stringify(people));
                    this.vaciarCampos();
                }
            },
            camposValidos(){
                let esValido = true;
                this.errores = [];

                if(this.persona.nombre.trim().length === 0){
                    esValido = false;
                    this.errores.push("Falta el nombre");
                } else if(!isNaN(this.persona.nombre)){
                    esValido = false;
                    this.errores.push("Un nombre no puede ser un numero");
                }

                if(this.persona.sexo.length === 0){
                    esValido = false;
                    this.errores.push("Por favor, seleccione sexo");
                }

                if(this.persona.edad <= 0 || this.persona.edad > 200){
                    esValido = false;
                    this.errores.push("Edad no válida");
                }

                return esValido;
            },
            vaciarCampos() {
                this.persona.nombre = this.persona.sexo = "";
                this.persona.edad = 0;
                this.errores = [];
            }

        }
    }
</script>

<style>
    .userForm {
        background-color: yellow
    }
</style>
