<script></script>
<template>
  <form class="m-4 flex">
    <input
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
</template>
<script>
export default {
  methods: {
    retrieveData() {
      alert("Did something!");
    },
  },
};
</script>
