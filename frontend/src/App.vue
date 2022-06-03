<template>
  <div class="container-fluid">
    <div class="flex flex-col items-center h-screen space-y-8">
      <app-title title="My Scrapping App!"></app-title>
      <search-form></search-form>
      <company-card></company-card>
    </div>
  </div>
</template>

<script>
import AppTitle from "./components/AppTitle/AppTitle.vue";
import SearchForm from "./components/SearchForm/SearchForm.vue";
import CompanyCard from "./components/Company/CompanyCard.vue";

export default {
  name: "App",
  components: {
    AppTitle,
    SearchForm,
    CompanyCard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
