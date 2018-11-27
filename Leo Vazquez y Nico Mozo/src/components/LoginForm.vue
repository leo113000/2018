<template>
    <el-form ref="login" :model="form" label-width="120px">
        <el-form-item prop="username" label="Username" :rules="validations.username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="Password" :rules="validations.password">
            <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">Login</el-button>
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