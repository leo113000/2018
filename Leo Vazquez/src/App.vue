<template>
  <div id="app">
		<el-tabs @tab-click="handleClick">
			<el-tab-pane label="Home" name="home"></el-tab-pane>
			<el-tab-pane label="User Form" name="addUser"></el-tab-pane>
  	</el-tabs>
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
	methods: {
			handleClick(tab, event) {
        switch(tab.name){
					case "home":
						return this.$router.push("/");
					case "addUser":
						return this.$router.push("/addUser");
				}
      }
	},
	computed: {
		title() {
			return this.personas.length ? `Personas cargadas: ${this.personas.length}` : "No hay personas cargadas";
		}
	}
}
</script>
