<template lang="pug">
  section.l-section.l-section--vertical
    LokkerLogo.l-block
    LoginForm.l-block
</template>

<script>
import LoginForm from '@/components/LoginForm'
import LokkerLogo from '@/components/LokkerLogo'

export default {
  components: {
    LoginForm,
    LokkerLogo
  }
}
</script>
