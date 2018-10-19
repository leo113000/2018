<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/addUser">User Form</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
import userForm from './components/user-form.vue';
import userCardList from './components/user-card-list.vue';
import errorMessage from './components/error-message.vue';

export default {
	name: 'app',
	components: {
		userForm,
		userCardList,
		errorMessage
	},
	data() {
		return {
			personas: [],
			erroresDeFormulario : []
		}
	},
	computed: {
		title() {
			return this.personas.length ? `Personas cargadas: ${this.personas.length}` : "No hay personas cargadas";
		}
	}
}
</script>
