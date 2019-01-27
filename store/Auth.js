import {
  setToken,
  unsetToken,
  getTokenFromLocalStorage,
  getUserFromLocalStorage
} from '@/utils/auth'

export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null
  },

  getters: {
    user: state => {
      return state.user
    },
    isAuthenticated: state => {
      return state.authenticated
    }
  },

  mutations: {
    SET_USER: (state, user) => {
      if (user) {
        state.user = user
        state.authenticated = true
      } else {
        state.user = null
        state.authenticated = false
      }
    }
  },

  actions: {
    async login({ commit }, credentials) {
      const { $axios } = this

      try {
        return await $axios
          .$post('/auth/local', {
            identifier: credentials.email,
            password: credentials.password
          })
          .then(response => {
            const { user, jwt } = response
            if (jwt && user) {
              setToken(jwt)
              $axios.setHeader('Authorization', `Bearer ${jwt}`)
              commit('SET_USER', user)
            }
            return response
          })
      } catch (error) {
        return error.response
      }
    },
    logout({ commit }) {
      unsetToken()
      this.$axios.setHeader('Authorization', '')
      commit('SET_USER', null)
    },
    async checkAuth({ commit, getters }) {
      if (!getters.isAuthenticated) {
        const { $axios } = this
        const jwt = getTokenFromLocalStorage()
        const user = getUserFromLocalStorage()
        if (jwt && user) {
          $axios.setHeader('Authorization', `Bearer ${jwt}`)
          const loggedUser = await $axios.$get(`/users/${user.id}`)
          commit('SET_USER', loggedUser)
        }
      }
    }
  }
}
