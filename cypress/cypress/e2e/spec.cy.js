const { describe } = require("mocha")

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.title().should('eq', 'OrangeHRM')
  })
})



describe ('trial', () => {
  it ('trial 2', () => {

  })

})

cy.get()