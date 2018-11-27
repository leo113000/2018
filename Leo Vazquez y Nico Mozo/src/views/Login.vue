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
  justify-content: center;
  align-content: center;
  height: 100vh;
}
.home .box-card{
    max-width: 100%;
    width: 400px;
}
</style>
