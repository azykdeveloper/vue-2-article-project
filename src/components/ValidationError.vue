<template>
  <ul class="list-unstyled text-danger mb-2 text-center">
    <li v-for="errorMessage in errorMessages">
      {{ errorMessage }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'ValidationError',
    props: {
      validationErrors: {
        type: Object,
        required: true
      }
    },
    computed: {
      errorMessages() {
        return Object.keys(this.validationErrors).map(key => {
          const msg = this.validationErrors[key].join(', ')
          return `${key} ${msg}` 
        })
      }
    }
  }
</script>

<style scoped>

</style>