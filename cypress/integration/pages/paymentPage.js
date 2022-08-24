class paymentPage {

    getContinueButton() {
        return cy.get('button[aria-label="Proceed to review"]').should('be.visible')
    }

    selectPaymentMethod() {
    
    }
    
}
export default paymentPage;