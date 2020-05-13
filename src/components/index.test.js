import { shallowMount } from '@vue/test-utils';
import Specify from './index.vue';

function getMountedComponent(Component, propsData) {
  return shallowMount(Specify, {
    propsData,
  });
}

describe('Test whether the component can be used', () => {
  it(' 测试改组件的基础功能', () => {
    const wrapper = getMountedComponent(Specify, {
      title: '点我添加随机数',
    });
    expect(wrapper.find('button')).not.toBeNull();

    expect(wrapper.find('button').selector).toBe('button');

    expect(wrapper.find('li').selector).not.toBeNull();

    // 基础渲染测试完毕
  });

  it('测试渲染问题', async () => {
    const wrapper = getMountedComponent(Specify, {
      title: 'click me ',
    });
    await wrapper.setData({
      list: [1, 23, 4],
    });
    // 确保将 list 的数据进行渲染 长度为3
    expect(wrapper.findAll('li').length).toBe(3);

    wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();
    // 确定 li 的数量增加了
    expect(wrapper.findAll('li').length).toBe(4);
  });
});
