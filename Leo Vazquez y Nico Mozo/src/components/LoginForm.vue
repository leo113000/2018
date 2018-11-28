<template>
    <el-form ref="login" :model="form">
        <h2 class="login-message"> Login with your account! </h2>
        <el-form-item prop="username" :rules="validations.username">
            <el-input v-model="form.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="validations.password">
            <el-input v-model="form.password" placeholder="Password" type="password"></el-input>
        </el-form-item>
        <el-button class="social-button" type="primary" @click="onSubmit">Login</el-button>
    </el-form>
</template>

<script>
export default {
    name: "RegisterForm",
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        validations: {
            username: [
                { required: true, message: 'Please input username', trigger: 'blur' }
            ],
            password: [
                { required: true, message: 'Please input password', trigger: 'blur' }
            ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs['login'].validate(function (valid) {
          if (valid) {
            axios.post(URL + 'login', this.form)
            .then(function ({data}) {
                this.$auth.setToken(data.accessToken);
                this.$router.push({ path: '/home' })
            }.bind(this))
            .catch(function (error) {
                this.$message.error('Login Error!');
            }.bind(this));
          } else {
            return false;
          }
        }.bind(this));
      },
    }
  }
</script>
<style>
    h2.login-message {
        margin: 30px 0 40px;
        color: #666!important
    }
    .social-button {
        margin-top: 30px;
        width: 100%!important
    }
</style>
