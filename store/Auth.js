export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null
  },

  getters: {
    user: state => {
      return state.user
    }
  },

  mutations: {
    SET_AUTH: (state, options = {}) => {
      if (options.user && options.jwt) {
        state.user = options.user
        state.authenticated = true
        // this.$axios.setHeader('Authorization', `Bearer ${options.jwt}`)
      } else {
        state.user = null
        state.authenticated = false
        // this.$axios.setHeader('Authorization', '')
      }
    }
  },

  actions: {
    async login({ commit }, credentials) {
      const { $axios } = this

      try {
        await $axios
          .$post('http://localhost:1337/auth/local', {
            identifier: credentials.email,
            password: credentials.password
          })
          .then(response => {
            const { user, jwt } = response
            if (jwt && user) {
              window.localStorage.setItem('api_token', jwt)
              window.localStorage.setItem('current_user', user)
              commit('SET_AUTH', {
                jwt,
                user
              })
            }
          })
      } catch (e) {
        console.log(e)
        commit('SET_AUTH')
      }
    },
    checkAuth({ commit }) {
      const jwt = window.localStorage.getItem('api_token')
      const user = window.localStorage.getItem('current_user')
      commit('SET_AUTH', { user, jwt })
    }
  }
}
