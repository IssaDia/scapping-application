
import CompanyCard from "./CompanyCard.vue";
import { mount } from "@vue/test-utils";
import { createApp } from "vue";
import { createStore } from "vuex";


const store = createStore({
  state() {
    return {
      name: "",
      siren: "",
      isLoading: false,
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
  },
});

const app = createApp(CompanyCard);
app.use(store);
let wrapper;
beforeEach(() => {
  wrapper = mount(CompanyCard, {
    global: {
      plugins: [store],
    },
    computed: {
      getName() {
        return this.$store.state.name;
      },
      getSiren() {
        return this.$store.state.siren;
      },
      isLoading() {
        return this.$store.state.isLoading;
      },
    },
  });
});



describe("CompanyCard tests", () => {
  it("renders the component ", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm.getName).toBe("");
    expect(wrapper.vm.getName).toBe("");
    expect(wrapper.vm.isLoading).toBe(false);
  });
});
