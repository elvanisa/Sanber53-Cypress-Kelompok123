describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })
  it('Verify Failed Login - Wrong Creds', () => {
    cy.get('#user-name').clear().type('elvanisa')
    cy.get('[name="password"]').clear().type('123456')
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
  it.only('Verify Failed Login - Locked User', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('[name="password"]').type('secret_sauce')
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('contain.text','Sorry, this user has been locked out')
  })
})