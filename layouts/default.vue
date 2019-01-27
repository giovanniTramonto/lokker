<template lang="pug">
  .l-wrapper
    nuxt
    PageNavigation
</template>

<script>
import PageNavigation from '@/components/PageNavigation'

export default {
  components: {
    PageNavigation
  },
  middleware: 'check-auth'
}
</script>
