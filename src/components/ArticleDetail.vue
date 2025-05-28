<template>
  <div class="article-container">
    <img src="https://static.vecteezy.com/system/resources/previews/015/013/727/non_2x/article-writing-design-on-a-green-background-free-vector.jpg" alt="" width="100%" height="300" style="object-fit: cover;" />

    <div class="row my-5">
      <div class="col-12">
        <h2 class="card-title fw-bolder">{{ articleDetail.title }}</h2>
      </div>

      <!-- Author -->
      <div class="col-9 mt-5">
        <div class="d-flex gap-3">
          <img
            class="rounded"
            src="https://picsum.photos/200"
            width="50"
            height="50"
            alt=""
          />

          <div>
            <p class="fw-semibold mb-2">@{{ articleDetail.author.username }}</p>
            <p class="text-secondary">{{ articleDetail.author.bio }}</p>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="col-12 my-3">
        <p class="card-text fs-5" style="font-family: serif;">{{ articleDetail.body }}</p>
      </div>

      <!-- Created At -->
      <div class="col-12 ">
        <p class="card-text text-muted">
          <span class="fw-bold">Created:</span>
          {{ new Date(articleDetail.createdAt).toLocaleString() }}
        </p>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: "ArticleDetail",
  props: {
    articleDetail: {
      type: Object,
      required: true,
    },
  },
  
};
</script>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
}

.card-title {
  font-size: 3rem;
}
</style>
