<template>
  <div class="home">
    <el-card class="box-card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="Login" name="login">
            <login-form/>
        </el-tab-pane>
        <el-tab-pane label="Register" name="register">
          <register-form/>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-card class="box-card message-add">
        <h2> ¿Has buscado alguna vez un trabajo en Internet? </h2>
        <p> Has visto la cantidad de sueldos diferentes que hay para la misma posicion? 
        Le-Job te ayuda a comparar los sueldos de mas de 700 mil trabajos en mas de 
        175 paginas web, en vez de perder tiempo y dinero, Le-Job te 
        lo hace fácil para que encuentres tu trabajo ideal al mejor sueldo, 
        solo entra a Le-Job.com y escribe tu area, selecciona en dos clics 
        la fecha de inicio y renuncia. Así de simple, Le-Job busca al instante entre 
        cientos de paginas web y te muestra los trabajos disponibles, selecciona el 
        sueldo máximo que quieres ganar, elige el numero de dias de vacaciones, o filtra por 
        las puntuaciones de los usuarios, Le-Job te muestras los diferentes sueldos 
        disponibles para una misma posicion, así puedes estar seguro de encontrar 
        tu trabajo ideal al mejor sueldo, ¿Trabajo? Le-Job. </p>
    </el-card>
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";

export default {
  name: 'home',
  data(){
    return {
      activeName: 'login'
    }
  },
  components:{
    "register-form" : RegisterForm,
    "login-form" : LoginForm
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-image: url("../assets/building-1080592_1920.jpg");
  background-size: 100% auto;
  padding: 0;
  overflow: hidden;
  min-height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
  display: in;
  margin: 0;
}

.home .box-card{
  width: 400px;
  height: 100vh;
  border: 0;
  padding: 40px;
  border-radius: 0;
  display: table;
}

.home .box-card.message-add{
  width: 600px;
  height: auto;
  margin: 40px 40px 40px;
  background-color: rgba(54, 54, 54, 0.7);
  color: #eee;
  border: 0;
}

.home .box-card.message-add h2{
  color: #fff;
  margin-bottom: 40px!important;
}
</style>
