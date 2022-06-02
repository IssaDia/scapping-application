import { defineComponent } from '@vue/composition-api';
<template>
  <form class="m-4 flex">
    <input
      ref="get_company_name"
      class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
      placeholder="name of the company"
    />
    <button
      class="px-8 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
      @click.prevent="retrieveData()"
    >
      Search
    </button>
  </form>
  <p v-if="companyName">{{ companyName }}</p>
  <p v-else>Oh no 😢</p>
</template>

<script>
import { defineComponent } from "vue";

const baseURL = "http://localhost:3000/api";
export default defineComponent({
  data() {
    return {
      name: this.$store.name,
    };
  },
  computed: {
    companyName() {
      return this.$store.state.name;
    },
  },
  methods: {
    async retrieveData() {
      const companyName = this.$refs.get_company_name.value;

      await fetch(`${baseURL}/search/${companyName}`)
        .then((response) => response.json())
        .then((data) => {
          this.$store.commit("setName", data.name);
          console.log(data.name);
        })
        .catch((error) => console.log(error));
    },
  },
});
</script>
