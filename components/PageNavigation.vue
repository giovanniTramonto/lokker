<template lang="pug">
  nav(:class="$style.nav")
    ul
      li(
        v-if="isAuthenticated"
      )
        nuxt-link(
          :class="$style.link"
          to="/auth/logout"
        ) Logout
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  }
}
</script>


<style lang="scss" module>
.nav {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.link {
  color: map-get($colors, 'white');
}
</style>
