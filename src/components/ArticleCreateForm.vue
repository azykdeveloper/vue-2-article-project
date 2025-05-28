<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Create New Article</h1>
    <div class="text-center mb-4">
      <router-link to="/" class="btn text-primary"><- Back to Home</router-link>
    </div>

    <div class="card" style="max-width: 30rem; margin: auto">
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
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
          <button type="submit" class="btn btn-primary">Yaratish</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateArticle",
  data() {
    return {
      form: {
        title: "",
        description: "",
        body: "",
      },
    };
  },

  methods: {
    handleSubmit() {
      this.$store.dispatch("articles/createArticle", this.form)
        .then(() => {
          this.$router.push("/");
        })
        
    },
  },
  
  
  
};
</script>

<style scoped></style>
