
import { shallowMount } from "@vue/test-utils";
import SearchForm from "./SearchForm.vue";



describe("searcForm tests", () => {
const wrapper = shallowMount(SearchForm);

  it("clicking search button triggers search", ()=> {
      window.open = jest.fn();
      wrapper.vm.retrieveData = jest.fn();
      const searchBtn = ".search-btn";
      wrapper.find(searchBtn).trigger("click");
      expect(wrapper.vm.retrieveData).toBeCalled();

  });
});
