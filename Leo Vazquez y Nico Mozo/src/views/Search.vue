<template>
  <div>
    <nav-bar/>
    <div>
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
      <span v-if="!searchResults.length">No resuts</span>
      <el-card class="box-card" v-for="(item, index) in searchResults" :key="index">
        <div  @click="selectItem(item)">
          <div slot="header" class="clearfix">
            <span>{{ item.title }}</span>
          </div>
          <div class="text item">
            <p><b>Company: </b>{{ item.companyName }}</p>
            <p><b>Location: </b>{{ item.location }}</p>
          </div>
        </div>
      </el-card>
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
    getURL(source) {
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
          return URL + "job/le-jobs";
      }
    },
    onSubmit () {
      axios.get(this.getURL(this.form.source), { params: { keywords: this.form.keyword } })
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

