import persistenceStorage from "@/helpers/persistenceStorage";
import AuthService from "@/service/auth";

const state = {
  isLoading: false,
  user: null,
  errors: null,
  isAuthenticated: null
};

const mutations = {
  registerStart(state) {
    state.isLoading = true;
  },
  registerSuccess(state, user) {
    state.isLoading = false;
    state.user = user;
    state.errors = null;
    state.isAuthenticated = true;
  },
  registerFail(state, errors) {
    state.isLoading = false;
    state.user = null;
    state.errors = errors;
    state.isAuthenticated = false;
  },

  loginStart(state) {
    state.isLoading = true;
  },
  loginSuccess(state, user) {
    state.isLoading = false;
    state.user = user;
    state.errors = null;
    state.isAuthenticated = true;
  },
  loginFail(state, errors) {
    state.isLoading = false;
    state.user = null;
    state.errors = errors;
    state.isAuthenticated = false;
  },

  getCurrentUserStart(state) {
    state.isLoading = true;
  },
  getCurrentUserSuccess(state, user) {
    state.isLoading = false;
    state.user = user;
    state.errors = null;
    state.isAuthenticated = true;
  },
  getCurrentUserFail(state, errors) {
    state.isLoading = false;
    state.user = null;
    state.errors = errors;
    state.isAuthenticated = false;
  },

  logout(state) {
    state.isLoading = false;
    state.user = null;
    state.errors = null;
    state.isAuthenticated = false;
  }
};

const actions = {
  async register({ commit }, user) {
    commit("registerStart");
    try {
      const response = await AuthService.register(user);
      commit("registerSuccess", response.data.user);
      persistenceStorage.setItem("token", response.data.user.token);
      return response;
    } catch (error) {
      commit("registerFail", error.response?.data?.errors ?? "Xatolik");
      throw error;
    }
  },

  async login({ commit }, user) {
    commit("loginStart");
    try {
      const response = await AuthService.login(user);
      commit("loginSuccess", response.data.user);
      persistenceStorage.setItem("token", response.data.user.token);
      return response;
    } catch (error) {
      commit("loginFail", error.response?.data?.errors ?? "Xatolik");
      throw error;
    }
  },

  async getCurrentUser({ commit }) {
    commit("getCurrentUserStart");
    try {
      const response = await AuthService.getCurrentUser();
      commit("getCurrentUserSuccess", response.data.user);
      return response;
    } catch (error) {
      commit("getCurrentUserFail", error.response?.data?.errors ?? "Xatolik");
      throw error;
    }
  },

  logout({ commit }) {
    commit("logout");
    persistenceStorage.removeItem("token")
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
