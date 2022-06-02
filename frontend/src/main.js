import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./index.css";

const store = createStore({
  state() {
    return {
      name: "",
    };
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");


