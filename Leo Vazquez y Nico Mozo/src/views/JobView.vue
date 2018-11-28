<template>
  <div>
    <nav-bar/>
    <el-col class="wrapper-unit-box-card" :span="20" :offset="2">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>{{ job.title }}</span>
          </div>
          <div class="text item">
              <p><b>Company: </b>{{ job.companyName }}</p>
              <p><b>Location: </b>{{ job.location }}</p>
              <div v-html="job.description"></div>
          </div>
      </el-card>
    </el-col>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'job-view',
  created () {
    this.job = JSON.parse(localStorage.getItem('job') || '{}');
  },
  data(){
    return {
      job: {}
    }
  },
  components: {
    'nav-bar': Navbar
  }
}
</script>
<style>
  .wrapper-unit-box-card {
    margin-top: 40px!important
  }
</style>

