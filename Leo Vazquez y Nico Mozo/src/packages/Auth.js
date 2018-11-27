export default function (Vue) {
    Vue.auth = {
      setToken (token) {
        localStorage.setItem('token', token);
      },
      getToken () {
        return localStorage.getItem('token')
      },
      destroyToken () {
        localStorage.removeItem('token')
      },
      isAuthenticated () {
        return !!this.getToken();
      }
    }
  
    Object.defineProperties(Vue.prototype, {
      $auth: {
        get: () => {
          return Vue.auth
        }
      }
    })
  }
  