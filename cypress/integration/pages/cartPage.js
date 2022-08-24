class cartPage {

    getCheckoutButton() {
        return cy.get('#checkoutButton').should('be.visible')
    }

    verifyProductDisplayed(text) {
        return cy.get('.mat-cell:nth-child(2)').contains(text)
    }

}

export default cartPage;