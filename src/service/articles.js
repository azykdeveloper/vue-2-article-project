import axios from "./axios";

const ArticlesService = {
  getArticles() {
    return axios.get('/articles')
  },

  getArticle(slug) {
    return axios.get(`/articles/${slug}`)
  },

  createArticle(data) {
    return axios.post('/articles', { article: data })
  },

  updateArticle(slug, data) {
    return axios.put(`/articles/${slug}`, { article: data })
  },

  deleteArticle(slug) {
    return axios.delete(`/articles/${slug}`)
  }
}

export default ArticlesService