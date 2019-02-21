<template lang="pug">
  section.l-section.l-section--vertical.l-section--bg
    .l-block(
      v-for="certificate in certificates"
      :class="$style.certificate"
    )
      h4 {{ certificate.title }}
      p Fälligkeit: alle {{ certificate.frenquence }} Jahre
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const request = await $axios.$get('/certificates')
    const { certificates } = request
    return { certificates }
  }
}
</script>

<style lang="scss" module>
.certificate {
  align-self: flex-start;
  padding: 1rem;
}
</style>
