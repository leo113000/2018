<template>
  <div>
    <nav-bar/>
    <section class="banner">
      <h1> Create a new job </h1>
    </section>
    <el-form ref="formnewjob" :rules="validations" class="new_job" :model="form" label-position="top" label-width="200px">
      <el-form-item prop="title" label="Title" :rules="validations.title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item prop="avgSalary" label="Salary" :rules="validations.avgSalary">
        <el-input-number :min="200" v-model="form.avgSalary" size="large" :step="200"></el-input-number>
      </el-form-item>
      <el-form-item prop="companyName" label="Company's Name" :rules="validations.companyName">
        <el-input v-model="form.companyName"></el-input>
      </el-form-item>
      <el-form-item prop="location" label="Location" :rules="validations.location">
        <el-input v-model="form.location"></el-input>
      </el-form-item>
      <el-form-item label="Posting Date">
        <el-col :span="24">
          <el-date-picker type="date" placeholder="When was it posted?" v-model="form.postingDate" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Is available now?">
        <el-switch v-model="form.available"></el-switch>
      </el-form-item>
      <el-form-item prop="description" label="Description" :rules="validations.description">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

import Navbar from '@/components/Navbar'

export default {
  name: 'NewJob',
  data() {
    return {
      form: {
        available: true,
        avgSalary: 0,
        companyName: "",
        description: "",
        keywords: "",
        location: "",
        postingDate: "",
        title: ""
      },
      validations: {
          title: [
              { required: true, message: 'Please input title', trigger: 'blur' },
          ],
          avgSalary:[
              { required: true, message: 'Please input average salary', trigger: 'blur' }
          ],
          companyName: [
              { required: true, message: 'Please input the name of the company', trigger: 'blur' }
          ],
          location: [
              { required: true, message: 'Please input the location', trigger: 'blur' }
          ],
          description: [
              { required: true, message: 'Please input the description', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
    onSubmit() {
        this.$refs['formnewjob'].validate((valid) => {
          if (valid) {
            axios.post(URL + 'job/', this.form)
            .then((data) => {
                this.$router.push({ path: '/home' })
            })
            .catch((error) => {
                this.$message.error('There are a lot of bad data');
            });
          } else {
            return false;
          }
        });
      },
  },
  components: {
    'nav-bar': Navbar
  }
}
</script>
<style>

  .banner {
    padding: 40px 80px 0;
    font-size: 30px
  }

  .el-form.new_job {
    width: 500px;
    text-align: left;
    padding: 40px 80px;
  }

</style>

