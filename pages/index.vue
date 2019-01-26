<template lang="pug">
  section.l-section.l-section--vertical
    LokkerLogo.l-block
    UserLogin.l-block
</template>

<script>
import UserLogin from '@/components/UserLogin'
import LokkerLogo from '@/components/LokkerLogo'

export default {
  components: {
    UserLogin,
    LokkerLogo
  },

  async asyncData({ $axios }) {
    // $axios.setToken('', 'Bearer')
    // const users = await $axios.$post(
    //   'http://localhost:1337/graphql',
    //   {
    //     query: `
    //       query {
    //         users {
    //           username
    //         }
    //       }
    //     `
    //   }
    // )
    return { users: '' }
  }
}
</script>
