<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Edit Article</h1>
    <div class="text-center mb-4">
      <router-link to="/" class="btn text-primary"><- Back to Home</router-link>
    </div>

    <div class="card" style="max-width: 30rem; margin: auto">
      <div class="card-body">
        <form @submit.prevent="updateArticle">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="form.title"
              required
            />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              class="form-control"
              id="description"
              v-model="form.description"
              required
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="body" class="form-label">Body</label>
            <textarea
              class="form-control"
              id="body"
              v-model="form.body"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">O'zgartirish</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "EditArticle",
  data() {
    return {
      form: {
        title: "",
        description: "",
        body: "",
      },
    };
  },
  
  computed: {
    ...mapState("articles", ["articleDetail"]),
  },
  created() {
    this.$store.dispatch("articles/getArticle", this.$route.params.slug).then(() => {
      this.form = {...this.articleDetail};
      // this.form.title = this.articleDetail.title;
      // this.form.description = this.articleDetail.description;
      // this.form.body = this.articleDetail.body;
    });
  },
  methods: {
    updateArticle() {
      this.$store.dispatch("articles/updateArticle", this.form).then(() => {
        this.$router.push({ name: "home" });
      });
    },
  },
  
};
</script>

<style scoped></style>
