export default {
  namespaced: true,

  state: {
    user: null,
    password: null
  },

  actions: {
    async login({ commit }, credentials) {
      const { $axios } = this

      await $axios
        .$post('http://localhost:1337/auth/local', {
          identifier: credentials.email,
          password: credentials.password
        })
        .then(res => {
          console.log(res)
        })
    }
  }
}
