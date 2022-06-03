<template>
  <form class="m-4 flex">
    <input
      ref="get_company_name"
      class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
      placeholder="name of the company"
    />
    <button
      class="search-btn px-8 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
      @click.prevent="retrieveData()"
    >
      Search
    </button>
    <loader-component></loader-component>
  </form>
</template>

<script>
import { defineComponent } from "vue";
import LoaderComponent from "../Loader/LoaderComponent.vue";

export const baseURL = "http://localhost:3000/api";
export default defineComponent({
  components: { LoaderComponent },
  methods: {
    async retrieveData() {
      const companyName = this.$refs.get_company_name.value;
      this.$store.commit("setLoading", true);

      await fetch(`${baseURL}/search/${companyName}`)
        .then((response) => response.json())
        .then((data) => {
          this.$store.commit("setName", data.name);
          this.$store.commit("setSiren", data.siren[0]);
          this.$store.commit("setLoading", false);
        })
        .catch((error) => console.log(error));
    },
  },
});
</script>
