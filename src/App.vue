<template>
  <Navbar />
  <div class="container">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    this.$store.dispatch("auth/getCurrentUser");
  },
};
</script>

<style>

</style>
