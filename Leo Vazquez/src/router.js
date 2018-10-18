import Vue from 'vue';
import VueRouter from 'vue-router';
import userForm from './components/user-form.vue';
import userCardList from './components/user-card-list.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: "home",
      component: userCardList,
    },
    {
      path: '/addUser',
      name: "user",
      component: userForm,
    },
  ]
})