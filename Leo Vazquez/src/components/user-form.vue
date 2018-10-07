<template>
    <div class="userForm">
        
        <form>			
			<input type="text" v-model="persona.nombre" placeholder="Nombre">
			<input type="number" max=120 min=4 v-model="persona.edad" placeholder="Edad">

			<div>
				<input v-model="persona.sexo" type="radio" id="man" 
				name="sexo" value="Hombre" checked />
				<label for="man">Hombre</label>
			</div>
			<div>
				<input v-model="persona.sexo" type="radio" id="woman" 
				name="sexo" value="Mujer" />
				<label for="woman">Mujer</label>
			</div>
		</form>
        
        <button @click="nuevaPersona()">Agregar</button>
    
    </div>
</template>

<script>
    export default {
        name: 'userForm',
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
                    this.persona.id++;
                    this.$emit('nuevaPersona', Object.assign({}, this.persona));
                    this.vaciarCampos();
                }else{
                    this.$emit('hayErrores', Object.assign({}, this.errores));
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
