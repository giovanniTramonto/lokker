<template lang="pug">
  form(:class="$style.form", @submit.prevent="authLogin")
    fieldset.l-line(:class="$style.credentials")
      input.l-line(type="email", v-model="email", placeholder="Email")
      input.l-line(type="password", v-model="password")

    input.button.l-line(type="submit", value="Submit")
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: 'Password'
    }
  },

  methods: {
    async authLogin() {
      const { email, password, $store } = this
      // if (email !== '' && password !== 'Password') {
      await $store.dispatch('Auth/login', {
        email,
        password
      })
      // }
    }
  }
}
</script>

<style lang="scss" module>
.form {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-width: 15rem;
}

.credentials {
  display: flex;
  flex-direction: column;
}
</style>
