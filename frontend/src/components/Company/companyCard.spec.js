import { mount } from "@vue/test-utils";
import CompanyCard from "./CompanyCard.vue"

describe("CompanyCard tests", () => {
  it("renders the component ", () => {
    const wrapper = mount(CompanyCard);
    expect(wrapper.exists()).toBe(true);
  });
});
