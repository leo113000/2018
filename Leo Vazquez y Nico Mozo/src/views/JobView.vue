<template>
  <div>
    <nav-bar/>
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

