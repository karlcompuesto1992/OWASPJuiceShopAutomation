class deliveryPage {

    getContinueButton() {
        return cy.get('button[aria-label="Proceed to delivery method selection"]')
    }

}

export default deliveryPage;