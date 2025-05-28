import ArticlesService from "@/service/articles";

const state = {
  isLoading: false,
  articles: [],
  articleDetail: null,
  // isAuthenticated: null
};

// GET ARTICLES
const mutations = {
  getArticlesStart(state) {
    state.isLoading = true;
    state.articles = [];
  },
  getArticlesSuccess(state, payload) {
    state.isLoading = false;
    state.articles = payload;
  },
  getArticlesFail(state) {
    state.isLoading = false;
  },

  // GET ARTICLE
  getArticleStart(state) {
    state.isLoading = true;
    state.articleDetail = null
  },
  getArticleSuccess(state, payload) {
    state.isLoading = false;
    state.articleDetail = payload;
  },
  getArticleFail(state) {
    state.isLoading = false;
  },

  // UPDATE ARTICLE
};

const actions = {
  async getArticles({ commit }) {
    commit("getArticlesStart");
    try {
      const response = await ArticlesService.getArticles();
      commit("getArticlesSuccess", response.data.articles);
    } catch (error) {
      commit("getArticlesFail");
    }
  },

  async getArticle({ commit }, slug) {
    commit("getArticleStart");
    try {
      const response = await ArticlesService.getArticle(slug);
      commit("getArticleSuccess", response.data.article);
    } catch (error) {
      commit("getArticleFail");
    }
  },

  async createArticle(context, data) {
    try {
      const response = await ArticlesService.createArticle(data);
      return response.data.article;
    } catch (error) {
      throw error;
    }
  },

  async updateArticle(context, data) {
    try {
      const response = await ArticlesService.updateArticle(data.slug, data);
      return response.data.article;
    } catch (error) {
      throw error;
    }
  },

  async deleteArticle(context, id) {
    return await ArticlesService.deleteArticle(id);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
