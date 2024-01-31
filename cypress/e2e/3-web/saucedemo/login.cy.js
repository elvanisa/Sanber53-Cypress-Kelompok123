import loginPage from "../../../support/pageObject/loginPage"

describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it.only('Verify Failed Login - Wrong Creds', () => {
    cy.get(loginPage.usr).type('elvanisa')
    cy.get(loginPage.pwd).type('123456')
    //cy.get('.submit-button.btn_action').click()
    loginPage.clickLogin()
    //cy.get('[data-test="error"]').should('be.visible')
    loginPage.verifyError()
  })
  it('Verify Failed Login - Locked User', () => {
    cy.get(loginPage.usr).type('locked_out_user')
    cy.get(loginPage.pwd).type('secret_sauce')
    cy.get(loginPage.login_btn).click()
    cy.get(loginPage.err).should('contain.text','Sorry, this user has been locked out')
  })
})