<template lang="pug">
  section.l-section
    .l-block
      h4(:class="$style.title") Hi {{ username }} : )
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ $axios }) {
    // const users = await $axios.$post('/graphql', {
    //   query: `
    //     query {
    //       user(id: ${user.id}) {
    //         username
    //       }
    //     }
    //   `
    // })
    // return { user: user }
  },

  computed: {
    username() {
      return (this.user || {}).username
    },
    ...mapGetters('auth', ['user'])
  }
}
</script>

<style lang="scss" module>
.title {
  color: map-get($colors, 'white');
}
</style>
