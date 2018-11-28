<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#tab-login, #tab-register {
  width: 180px!important;
  color: #aaa;
  transition: 0.6s;
}
#tab-login.is-active, #tab-register.is-active {
  color: #333;
}
</style>
