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
//
Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('.item-name').each((element, index, list) => {
        if(element.text().includes(productName))
            cy.get('button[aria-label="Add to Basket"]').eq(index).click()
            
    })
})

Cypress.Commands.add('selectEntry', (entryName) => {
    cy.get('.mat-table > mat-row').each((element, index, list) => {
        if(element.text().includes(entryName)) {
            cy.get('.mat-radio-button').eq(index).click()
            return false
        }
    })
})

Cypress.Commands.add('verifyDisplayedProducts', (validProduct,invalidProduct) => {
    cy.get('.item-name').each((element, index, list) => {
        if(element.text().includes(invalidProduct))
            throw new Error("There is an Invalid Product displayed")
        
        else(element.text().includes(validProduct))
            return cy.log(element.text() + 'is a Valid Product')
    })
})




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