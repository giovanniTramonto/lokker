<template lang="pug">
  div(:class="$style.formCase")
    form.l-block(:class="$style.form", @submit.prevent="authLogin")
      .l-line(:class="$style.credentials")
        input.input.l-line(type="email", v-model="email", placeholder="Email")
        input.input.l-line(type="password", v-model="password", placeholder="Password")

      input.button.l-line(
        type="submit"
        value="Submit"
        :style="{ 'button--loading': loading }"
      )

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
      error: null,
      loading: false
    }
  },

  methods: {
    authLogin() {
      const { email, password, $store, $router } = this
      this.loading = true
      $store
        .dispatch('auth/login', {
          email,
          password
        })
        .then(response => {
          this.loading = false
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
</script>

<style lang="scss" module>
.form {
  display: flex;
  flex-direction: column;
}

.formCase {
  width: 100%;
  padding: 0 1rem;
}

@include media('>=mobile') {
  .formCase {
    width: 16rem;
    padding: 0;
  }
}

.credentials {
  display: flex;
  flex-direction: column;
}

.error {
  color: map-get($colors, 'white');
}
</style>
