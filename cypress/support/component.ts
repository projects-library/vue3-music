/* eslint-disable @typescript-eslint/ban-ts-comment */
import { mount } from 'cypress/vue'
import { install as I18nPlugin } from './../../src/modules/i18n'
import './commands'
import '@unocss/reset/tailwind.css'
import '../../src/styles/main.css'
import '../../src/styles/theme.css'
import 'uno.css'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

// @ts-expect-error
Cypress.Commands.add('mount', (component, options = {}) => {
  // 设置 options
  options.global = options.global || {}
  options.global.stubs = options.global.stubs || {}
  options.global.components = options.global.components || {}
  options.global.plugins = options.global.plugins || []

  // 添加全局插件
  options.global.plugins.push(I18nPlugin)

  // @ts-expect-error
  return mount(component, options).then(async () => {
    // 注册 vue alia，可以通过 cy.get('@vue') 获取组件实例
    await Cypress.vue.$nextTick()
    cy.wrap(Cypress.vueWrapper, { log: false }).as('vue')
  })
})
