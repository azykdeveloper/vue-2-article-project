<template>
  <section class="py-5 my-5  container">
    <div class="row py-lg-5 text-center">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Maqolalar Loyihasi</h1>
        <p class="lead text-body-secondary">
          Ushbu loyiha maqolalarni yozish, o'qish va boshqarish uchun
          mo'ljallangan. Foydalanuvchilar o'z maqolalarini qo'shishlari va
          boshqalar bilan bo'lishishlari mumkin. Loyihada Vue.js va Vuex
          texnologiyalari ishlatilgan.
        </p>
        <p>
          <button @click="createArticleLink" class="btn btn-primary">
            <i class="bi bi-feather"></i> Maqola yozish
          </button>
        </p>
      </div>
    </div>

    <div v-if="isLoading" class="text-center py-3">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <ArticleCard
        v-for="article in articles"
        :article="article"
        :key="article.id"
      />
    </div>
  </section>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    ArticleCard,
  },
  computed: {
    ...mapState("articles", ["articles", "isLoading"]),
    ...mapState("auth", ["isAuthenticated"]),
  },
  mounted() {
    this.$store.dispatch("articles/getArticles");
  },
  methods: {
    createArticleLink() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "login" });
      } else {
        this.$router.push({ name: "create-article" });
      }
    },
  },
};
</script>

<style scoped></style>
