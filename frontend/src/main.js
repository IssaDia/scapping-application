import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./index.css";

const store = createStore({
  state() {
    return {
      name: "",
      siren: "",
      isLoading: false,
      isError: false,
    };
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setSiren(state, siren) {
      state.siren = siren;
    },
    setLoading(state, status) {
      state.isLoading = status;
    },
    setIsError(state, status) {
      state.isError = status;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");



