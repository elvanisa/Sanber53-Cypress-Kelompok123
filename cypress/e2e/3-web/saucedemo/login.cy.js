import loginPage from "../../../support/pageObject/loginPage"
const loginData = require('../../../fixtures/loginData.json')

describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('Verify Failed Login - Wrong Creds', () => {
    cy.get(loginPage.usr).type(loginData["invalid-data"]["wrong-user"])
    cy.get(loginPage.pwd).type(loginData["invalid-data"]["invalid-password"])
    //cy.get('.submit-button.btn_action').click()
    loginPage.clickLogin()
    //cy.get('[data-test="error"]').should('be.visible')
    loginPage.verifyError()
  })
  it('Verify Failed Login - Locked User', () => {
    cy.get(loginPage.usr).type(loginData["locked-user"])
    cy.get(loginPage.pwd).type(loginData["valid-passw"])
    cy.get(loginPage.login_btn).click()
    cy.get(loginPage.err).should('contain.text',loginData["err-msg"])
  })
  it('Verify Success Login - Env Variable', () => {
    cy.get(loginPage.usr).type(Cypress.env('nm'))
    cy.inputan(loginPage.pwd,Cypress.env('pwd'))
    cy.get(loginPage.login_btn).click()
    cy.url().should('contain', '/inventory.html')
  })
  it('Verify Success Login - Custom Command', () => {
    cy.logintest(Cypress.env('nm'),Cypress.env('pwd'))
    // cy.logintest("standard_user","secret_sauce")
    cy.verifyUrl('/inventory.html')
  })
})