<template lang="pug">
  nav(:class="$style.nav")
    nuxt-link(
      :class="$style.logo"
      to="/"
    ) Lokker
    ul(
      v-if="isAuthenticated"
      :class="$style.navInner"
    )
      li
        nuxt-link(
          :class="$style.link"
          to="/certificates"
        ) Zertifikate
      li
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
  top: 0;
  right: 0;
  left: 0;
  padding: 0.5rem;
  background: map-get($colors, 'main');
  display: flex;
  justify-content: space-between;
}

.navInner {
  display: flex;

  li + li {
    margin-left: 1rem;
  }
}

.link {
  color: map-get($colors, 'white');
}

.logo {
  html & {
    color: map-get($colors, 'yellow');
    font-weight: bold;
    letter-spacing: 0.2em;
  }
}
</style>
