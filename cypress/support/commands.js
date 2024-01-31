// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('logintest', (username, password) => {
    cy.get('#user-name').type(username)
    cy.get('[name="password"]').type(password)
    cy.get('.submit-button.btn_action').click()
})

Cypress.Commands.add('verifyUrl', (pathnya) => {
    cy.url().should('contain', pathnya)
})

Cypress.Commands.add('clickElem', (locator) => {
    cy.get(locator).click()
})

Cypress.Commands.add('inputan', (locator, value) => {
    cy.get(locator)
    .should('be.visible')
    .clear()
    .type(value)
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })