<template>
  <div class="d-flex align-items-center py-4 min-vh-100  ">

    <div class="form-login w-100 m-auto">
      <form @submit.prevent="login">
        <h2 class="h3 mb-4 fw-normal text-center">Tizimga kirish</h2>
  
        <ValidationError v-if="validationErrors" :validationErrors="validationErrors" />

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="user.email"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          v-model="user.password"
          />
          <label for="floatingPassword">Password</label>
        </div>
  
        
        <button class="btn btn-primary w-100 py-2 mt-3" type="submit">Kirish</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ValidationError from './ValidationError.vue';
export default {
  name: 'Login',
  components: {
    ValidationError: ValidationError
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
    };
  },
  computed: {
    ...mapState('auth', {
      isLoading: state => state.isLoading,
      validationErrors: state => state.errors
    }),
    
    // isLoading() {
    //   return this.$store.state.auth.isLoading
    // },
    // validationErrors() {
    //   return this.$store.state.auth.errors
    // }
  },
  methods: {
    login() {
      if (Object.values(this.user).every(v => v && v.trim())) {
        this.$store.dispatch('auth/login', this.user)
          .then(() => {
            this.$router.push({ name: 'home' })
            this.user = {} 
          })
          .catch((error) => {
            console.error('Registration error:', error)
          })
      } else {
        alert('Iltimos barcha maydonlarni to\'ldiring!')
      } 
    }
  }
};
</script>

<style scoped>
.form-login {
    max-width: 330px;
    padding: 1rem;
}
.form-login input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.form-login input[type="password"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}


</style>
