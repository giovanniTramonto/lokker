<template lang="pug">
  section
    h1
      span(v-if="error.statusCode === 404") page not found …
      span(v-else) an error occurred …
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
