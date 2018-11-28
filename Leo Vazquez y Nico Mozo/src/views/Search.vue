<template>
  <div>
    <nav-bar/>
    <div class="search_box">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="form.source" placeholder="Select source">
            <el-option v-for="(option, index) in options" :label="option.value" :value="option.id" :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.keyword" placeholder="Search by..."></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Search</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <span v-if="!searchResults.length">
        <i class="el-icon-loading"></i>
      </span>
      <span v-if="searchResults.length">
        <h4 class="result-h4"> Resultados de su busqueda </h4>
      </span>
      <el-col class="wrapper-card" :span="8"  v-for="(item, index) in searchResults" :key="index">
        <el-card class="box-card">
          <div class="clicked-card" @click="selectItem(item)">
            <div slot="header" class="clearfix">
              <span>{{ item.title }}</span>
            </div>
            <div class="text item">
              <p><b>Company: </b>{{ item.companyName }}</p>
              <p><b>Location: </b>{{ item.location }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'search',
  created () {
    axios.get(URL + 'job/source')
    .then(function({ data }){
      this.options = Object.keys(data).map(index => ({ id: index , value: data[index] }));
      this.onSubmit()
    }.bind(this));
  },
  data(){
    return {
      options: [],
      form: {
        source: '',
        keyword: ''
      },
      searchResults: []
    }
  },
  methods: {
    selectItem (item) {
      localStorage.setItem('job', JSON.stringify(item));
      this.$router.push({ path: 'job' });
    },
    logout () {
      this.$auth.destroyToken();
      this.$router.push({ path: '/' })
    },
    getSourceURL(source) {
      switch (source) {
        case "1":
          return URL + "job/adzuna-gb";
        case "2":
          return URL + "job/adzuna-us";
        case "3":
          return URL + "job/authentic-jobs";
        case "4":
          return URL + "job/github";
        case "5":
          return URL + "job/reed";
        case "6":
          return URL + "job/usa-jobs";
        case "7":
        default:
          return URL + "job/le-jobs"; 
      }
    },
    onSubmit () {
      this.searchResults = [];
      axios.get(this.getSourceURL(this.form.source), { params: { keywords: this.form.keyword } })
      .then(function({ data }){
        this.searchResults = data;
      }.bind(this));
    }
  },
  components: {
    'nav-bar': Navbar
  }
}
</script>

<style>
  .search_box {
    padding: 40px;
    background-color: #333;
    -webkit-box-shadow: inset 0px 0px 74px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 74px 0px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 74px 0px rgba(0,0,0,0.75);
  }

  .search_box .el-form-item {
    margin-bottom: 0
  }

  .result-h4 {
    padding: 20px 0 10px
  }

  .el-icon-loading {
    padding: 50px;
    font-size: 50px
  }

  .clicked-card {
    cursor: pointer;
    transition: 0.3s
  }

  .clicked-card:hover {
    opacity: 0.6
  }

  .wrapper-card {
    padding: 20px;
    vertical-align: top
  }
</style>


