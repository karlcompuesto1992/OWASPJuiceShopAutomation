class paymentPage {

    getContinueButton() {
        return cy.get('#checkoutButton').should('be.visible')
    }

    getConfirmation() {
        return cy.get('h1.confirmation').should('be.visible')
    }
    
}
export default paymentPage;