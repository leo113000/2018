import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Search from './views/Search.vue'
import JobView from './views/JobView.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        loginRequired: false
      }
    },
    {
      path: '/home',
      name: 'search',
      component: Search,
      meta: {
        loginRequired: true
      }
    },
    {
      path: '/job',
      name: 'job',
      component: JobView,
      meta: {
        loginRequired: true
      }
    }
  ]
});

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(url => url.meta.loginRequired)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/'
        })
      } else {
        next()
      }
    } else{
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/home'
        })
      } else {
        next()
      }
    }
  }
)


export default router;
