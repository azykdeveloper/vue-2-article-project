<template>
  <header class=" z-index-3 bg-white fixed-top" >
    <div class="container border-bottom py-3 ">
      <div class="d-flex flex-wrap align-items-center justify-content-between">
        <span class="border border-2 p-1">
          <router-link
            to="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none px-3 py-1 fw-bold text-uppercase letter-spacing-5 font-monospace bg-dark"
            style="letter-spacing: 3px"
          >
            Maqola
          </router-link>
        </span>

        <div class="text-end">
          <template v-if="isAnonymous">
            <router-link
              :to="{ name: 'login' }"
              class="btn btn-outline-dark me-2"
              >Kirish</router-link
            >
            <router-link
              :to="{ name: 'register' }"
              class="btn btn-primary text-white"
              >Ro'yxatdan o'tish</router-link
            >
          </template>
          <template v-if="isAuthenticated">
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ user.username }}
              </button>
              <ul class="dropdown-menu dropdown-menu-light">
                <li>
                  <a class="dropdown-item lh-sm" href="#">
                    <span class="d-block fw-bold">{{ user.username }}</span>
                    <span class="text-secondary" style="font-size: 12px;">{{ user.email }}</span>
                  </a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item text-danger" href="#" @click="logout">Chiqish</a>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      isAuthenticated: (state) => state.auth.isAuthenticated,
      user: (state) => state.auth.user,
    }),
    isAnonymous() {
      return !this.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
  
};
</script>

<style>

</style>
