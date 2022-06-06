<template>
  <form class="m-4 flex">
    <input
      v-model.trim="name"
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
  <div v-if="isError" className="text-red-500">
    <p>Sorry, an error occured</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LoaderComponent from "../Loader/LoaderComponent.vue";

import useValidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";

export const baseURL = "http://localhost:3000/api";
export default defineComponent({
  components: { LoaderComponent },
  data() {
    return {
      v$: useValidate(),
      name: "",
      error: this.$store.state.isError,
    };
  },
  validations() {
    return {
      name: { required, minLength: maxLength(20) },
    };
  },
  computed: {
    isError() {
      return this.$store.state.isError;
    },
  },
  methods: {
    async retrieveData() {
      // this.v$.$touch();
      this.v$.$validate();
      if (!this.v$.$error) {
        const companyName = this.name;
        await fetch(`${baseURL}/search/${companyName}`)
          .then((response) => response.json())
          .then((data) => {
            this.$store.commit("setName", data.name);
            this.$store.commit("setSiren", data.siren[0]);
            this.$store.commit("setLoading", false);
            this.$store.commit("setIsError", false);
          })
          .catch((error) => console.log(error));
      } else {
        this.$store.commit("setIsError", true);
        console.log("error", this.$store.state.isError);
      }
    },
  },
});
</script>
