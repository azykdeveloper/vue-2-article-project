<template>
  <div class="my-5 py-5">
    <CreateArticle  />
  </div>
</template>

<script>
import CreateArticle from "@/components/ArticleCreateForm.vue";

export default {
  name: "CreateArticleView",
  components: {
    CreateArticle,
  },
  
};
</script>

<style scoped></style>
