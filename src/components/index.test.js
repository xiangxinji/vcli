import { shallowMount } from '@vue/test-utils';
import Comp from './index.vue';

function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData,
  });
}

describe('Test whether the component can be used', () => {
  it('Whether it can render successfully', () => {
    const wrapper = getMountedComponent(Comp, {
      message: '点我',
    });
    expect(wrapper.html).not.toBeNull();
  });

  it('Now I need to add a test case', () => {
    const wrapper = getMountedComponent(Comp, {
      message: '非礼勿视',
    });
    expect(wrapper.text()).toBe('非礼勿视');
  });
});
