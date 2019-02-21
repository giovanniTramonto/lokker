<template lang="pug">
  section.l-section
    .l-block
      h4(:class="$style.title") Hi {{ username }} : )
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
