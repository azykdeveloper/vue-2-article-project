<template>
  <div class="py-5 my-5">
    <div v-if="isLoading" class="text-center py-3">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <ArticleDetail
      v-if="articleDetail && !isLoading"
      :articleDetail="articleDetail"
    />
  </div>
</template>

<script>
import ArticleDetail from "@/components/ArticleDetail.vue";
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("articles/getArticle", this.$route.params.slug);
  },
  components: {
    ArticleDetail,
  },
  computed: {
    ...mapState("articles", ["articleDetail", "isLoading"]),
  },
};
</script>

<style scoped></style>
