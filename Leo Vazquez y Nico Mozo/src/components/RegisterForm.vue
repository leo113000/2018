<template>
    <el-form ref="register" :model="form" label-width="120px">
        <el-form-item prop="email" label="E-mail" :rules="validations.email">
            <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="username" label="Username" :rules="validations.username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="Password" :rules="validations.password">
            <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">Register</el-button>
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