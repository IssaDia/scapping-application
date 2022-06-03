
import {  mount } from "@vue/test-utils";
import AppTitle from "./AppTitle.vue"


describe("AppTitle tests", () => {
    
   it("renders the component with right title", () => {
       const title = "Scrappy";
       const wrapper = mount(AppTitle, {
         propsData: { title },
       });
      
     expect(wrapper.exists()).toBe(true);
   });
});
