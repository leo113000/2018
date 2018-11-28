<template>
  <el-menu class="el-menu-demo" mode="horizontal" >
  <el-menu-item index="1" @click="searchJobs">Search Jobs</el-menu-item>
  <el-menu-item index="2" @click="newJobs">Post new Job</el-menu-item>
  <el-submenu index="3">
    <template slot="title">User</template>
    <el-menu-item index="2-1" @click="logout">Logout</el-menu-item>
  </el-submenu>
</el-menu>  
</template>
<script>
export default {
  name: 'navbar',
  methods: {
    logout(){
      this.$auth.destroyToken();
      this.$router.push({ path: '/' })
    },
    searchJobs() {
      this.$router.push({ path: '/home' })
    },
    newJobs() {
      this.$router.push({ path: '/new' })
    }
  }
}
</script>