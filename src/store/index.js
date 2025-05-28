import articles from "@/modules/articles";
import auth from "@/modules/auth";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  modules: {
    auth,
    articles
  }
  
});

export default store;
