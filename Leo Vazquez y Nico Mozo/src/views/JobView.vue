<template>
  <div>
    <nav-bar/>
    <el-col class="wrapper-unit-box-card" :span="20" :offset="2">
      <el-card class="box-card">
        <div class="clicked-card">
          <div slot="header" class="clearfix">
            <h3>{{ job.title }}</h3>
          </div>
          <div class="text item">
            <el-tag type="success" size="small" hit>
              <b><i class="el-icon-circle-check"></i> </b>{{ job.companyName }}
            </el-tag>
            <el-tag type="info" size="small" hit>
              <b><i class="el-icon-location"></i> </b>{{ job.location }}
            </el-tag>
            <el-tag type="warning" size="small" hit v-if="!job.avgSalary">
              <b><i class="el-icon-location"></i> </b> Salary Unknown
            </el-tag>
          </div>
          <div class="description" v-if="job.description">
            <p  v-html="formatDescription(job.description)">  </p>
          </div>
          <div class="salary" v-if="job.avgSalary">
            <p> <b> <i class="el-icon-star-on" ></i>&nbsp;${{ job.avgSalary }}</b> / per year </p>
          </div>
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
  },
  methods: {
    formatDescription (text) {
      text = text.replace(/<[^>]*>/g, '')

      text = text.split("")
      
      text = text.map(letter => {
        if(letter == "." && (Math.random() * 10 + 1) > 5) {
          letter += "<br>"
        }
        return letter
      }).join("");

      return (text == null || text == undefined) ? "" : text
    }
  }
}
</script>
<style>
  
  
  .wrapper-unit-box-card {
    padding: 20px;
    vertical-align: top
  }

  .wrapper-unit-box-card .box-card {
    text-align: left;
    padding: 0px 40px 20px;
  }

  .wrapper-unit-box-card .box-card .clearfix h3 {
    color: #444!important;
    font-size: 40px;
    margin-bottom: 20px!important;
    text-transform: capitalize!important;
  }

  .wrapper-unit-box-card .box-card .el-tag {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .wrapper-unit-box-card .box-card .text {
    color: #555!important;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px!important;
    margin-bottom: 40px!important;
  }

  .wrapper-unit-box-card .box-card .description {
    color: #555!important;
  }

  .wrapper-unit-box-card .box-card .salary {
    color: #555!important;
    font-size: 18px;
  }

  i.el-icon-star-on {
    color: #ffd700
  }

  .wrapper-unit-box-card .box-card .text i{
    margin-right: 10px;
    opacity: 0.4;
    position: relative;
    top:1px;
  }
</style>

