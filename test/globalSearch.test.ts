import { config, mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import GlobalSearch from '../src/components/GlobalSearch.vue'

// 防止报错 _ctx.$t is not a function
config.global.mocks = {
  $t: () => {},
}

describe('GlobalSearch.vue 组件单元测试', () => {
  it('should render', () => {
    const wrapper = mount(GlobalSearch, {
      props: { themeVisible: false },
    })
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('.search-bg').isVisible()).toBe(false)
  })

  it('should be interactive', async () => {
    const wrapper = mount(GlobalSearch, {
      props: { themeVisible: false },
    })

    expect(wrapper.find('input').exists()).toBe(true)

    expect(wrapper.find('.search-bg').isVisible()).toBe(false)

    await wrapper.get('input').trigger('focus')

    expect(wrapper.find('.search-bg').isVisible()).toBe(true)

    await wrapper.setProps({ themeVisible: true })

    expect(wrapper.find('.search-bg').isVisible()).toBe(false)
  })
})
