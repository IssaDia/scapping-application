<template>
  <div v-if="getName" class="flex flex-col">
    <div class="bg-white shadow-md rounded-3xl p-4">
      <div class="flex flex-col">
        <div class="h-full w-full lg:h-24 lg:w-48 lg:mb-0 mb-3"></div>
        <div class="flex-auto ml-3 justify-evenly py-2">
          <h2 v-if="getName" class="flex-auto text-lg font-medium">
            {{ getName }}
          </h2>
        </div>
        <div class="flex p-4 pb-2 border-t border-gray-200"></div>
        <div class="flex space-x-3 text-sm font-medium">
          <div class="flex-auto flex space-x-3">
            <button
              class="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2"
            >
              <span>SIREN:</span><span v-if="getSiren">{{ getSiren }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  computed: {
    getName() {
      return this.$store.state.name;
    },
    getSiren() {
      return this.$store.state.siren;
    },
    isError() {
      return this.$store.state.isError;
    },
  },
});
</script>
