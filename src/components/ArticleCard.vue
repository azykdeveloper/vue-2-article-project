<template>
  <div class="col">
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">{{ article.title }}</h5>
        <p class="card-text">
          {{ article.description }}
        </p>
      </div>

      <div class="card-footer">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm text-primary" @click="$router.push('/article/' + article.slug)">
              View
            </button>
            <button @click="$router.push({ name: 'edit-article', params: { slug: article.slug }})" v-if="user.username === article.author.username" type="button" class="btn btn-sm text-secondary">
              Edit
            </button>
            <button @click="deleteArticle(article.slug)" v-if="user.username === article.author.username" type="button" class="btn btn-sm text-danger">
              Delete
            </button>
            
          </div>
          <small class="text-body-secondary">{{ new Date(article.createdAt).toLocaleDateString() }}</small>
        </div>
      </div>
    </div>
  </div>

    
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ArticleCard",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  
  methods: {
    deleteArticle(id) {
      this.$store.dispatch("articles/deleteArticle", id).then(() => {
        this.$store.dispatch("articles/getArticles");
      });
    },
  },
};
</script>

<style scoped>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}


</style>
