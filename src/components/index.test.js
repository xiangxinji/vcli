import { shallowMount } from '@vue/test-utils';
import Comp from './index.vue';

const wrapper = shallowMount(Comp);

describe('测试该组件是否能正常工作', () => {
  it('基础部分', () => {
    expect(wrapper.html).not.toBeNull();
  });
});
