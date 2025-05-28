import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/article/:slug",
      name: "article",
      component: () => import("../views/ArticleDetailView.vue"),
    },
    {
      path: "/articles/create",
      name: "create-article",
      component: () => import("../views/CreateArticleView.vue"),
    },
    {
      path: "/articles/edit/:slug",
      name: "edit-article",
      component: () => import("../views/EditArticleView.vue"),
    },
  ],
});

export default router
