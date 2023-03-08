import GlobalSearch from '../GlobalSearch.vue'

describe('GlobalSearch 组件单元测试', () => {
  const selector = {
    input: '[tid=search-input]',
    bg: '.search-bg',
  }

  it('should render', () => {
    cy.mount(GlobalSearch, {
      props: {
        themeVisible: false,
      },
    })

    cy.get(selector.input).should('exist')
    cy.get(selector.bg).should('not.be.visible')
  })

  it('should be interactive', () => {
    cy.mount(GlobalSearch, {
      props: {
        themeVisible: false,
      },
    })

    cy.get(selector.input).trigger('focus')
    cy.get(selector.bg).should('be.visible')
    cy.get('@vue').invoke('setProps', { themeVisible: true })
    cy.get(selector.bg).should('not.be.visible')
  })
})
