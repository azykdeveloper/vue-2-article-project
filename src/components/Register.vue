<template>
  <div class="d-flex align-items-center py-4 min-vh-100">
    <div class="form-register w-100 m-auto">
      <form @submit.prevent="register">
        <h2 class="h3 mb-4 fw-normal text-center">Ro'yxatdan o'tish</h2>

        <ValidationError v-if="validationErrors" :validationErrors="validationErrors" />

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="azizbek747"
            v-model="user.username"
          />
          <label for="username">Username</label>
        </div>
        <div class="form-floating">
          <input
            type="email"
            class="form-control border-bottom-0 border-top-0 rounded-0"
            id="email"
            placeholder="name@example.com"
            v-model="user.email"
          />
          <label for="email">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            v-model="user.password"
          />
          <label for="password">Password</label>
        </div>

        <button
          class="btn btn-primary w-100 py-2 mt-3"
          type="submit"
          :disabled="isLoading"
        >
          <span v-if="isLoading">Yuklanmoqda...</span>
          <span v-else>Ro'yxatdan o'tish</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ValidationError from './ValidationError.vue';


export default {
  name: 'Register',
  components: {
    ValidationError
  },
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      }
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
    register() {
      if (Object.values(this.user).every(v => v && v.trim())) {
        this.$store.dispatch('auth/register', this.user)
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
.form-register {
  max-width: 330px;
  padding: 1rem;
}
.form-register input[type="text"] {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-register input[type="password"] {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
input:focus {
  outline: none !important;
  box-shadow: none !important;
}
</style>
