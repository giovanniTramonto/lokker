<template lang="pug">
  div
    form.l-block(:class="$style.form", @submit.prevent="authLogin")
      .l-line(:class="$style.credentials")
        input.input.l-line(type="email", v-model="email", placeholder="Email")
        input.input.l-line(type="password", v-model="password", placeholder="Password")

      input.button.l-line(type="submit", value="Submit")

    .l-block(
      v-if="error"
      :class="$style.error"
    ) {{ error }}
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    authLogin() {
      const { email, password, $store, $router } = this
      if (email) {
        $store
          .dispatch('auth/login', {
            email,
            password
          })
          .then(response => {
            if ($store.getters['auth/isAuthenticated']) {
              $router.push({ path: '/' })
            }
            this.error =
              response.status && response.status.toString().indexOf(4) > -1
                ? response.data.message
                : null
          })
      }
    }
  }
}
</script>

<style lang="scss" module>
.form {
  display: flex;
  flex-direction: column;
  min-width: 15rem;
}

.credentials {
  display: flex;
  flex-direction: column;
}

.error {
  color: map-get($colors, 'white');
}
</style>
