<template>
    <el-form ref="register" :model="form">
        <h2 class="login-message"> Enjoy all tools that we offer using your data </h2>
        <el-form-item prop="email" :rules="validations.email">
            <el-input placeholder="E-mail" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="username" :rules="validations.username">
            <el-input placeholder="Username" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="validations.password">
            <el-input placeholder="Password" v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-button class="social-button" type="primary" @click="onSubmit">Register</el-button>
    </el-form>
</template>

<script>

export default {
    name: "RegisterForm",
    data() {
      return {
        form: {
          username: '',
          email: '',
          password: ''
        },
        validations: {
            email: [
                { required: true, message: 'Please input email address', trigger: 'blur' },
                { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
            ],
            username:[
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
        this.$refs['register'].validate((valid) => {
          if (valid) {
            axios.post(URL + 'register', this.form)
            .then((data) => {
                this.$router.push({ path: '/' })
            })
            .catch((error) => {
                this.$message.error('Register Error!');
            });
          } else {
            return false;
          }
        });
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