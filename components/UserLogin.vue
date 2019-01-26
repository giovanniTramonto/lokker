<template lang="pug">
  form(:class="$style.form")
    form-group.l-line(:class="$style.credentials")
      input.l-line(type="text", value="User")
      input.l-line(type="password", value="Password")

    input.button.l-line(type="submit", value="Submit")
</template>

<script>
export default {}
</script>

<style lang="scss" module>
.form {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-width: 15rem;
}

.credentials {
  display: flex;
  flex-direction: column;
}
</style>
