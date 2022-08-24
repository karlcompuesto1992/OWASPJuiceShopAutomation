class addressPage {

    getAddAdressButton() {
        return cy.get('button[aria-label="Add a new address"]')
    }

    getSubmitButton() {
        return cy.get('#submitButton')
    }

    getCountryTextField() {
        return cy.get('input[placeholder="Please provide a country."]')
    }

    getNameTextField() {
        return cy.get('input[placeholder="Please provide a name."]')
    }

    getMobileTextField() {
        return cy.get('input[placeholder="Please provide a mobile number."]')
    }

    getZipCodeTextField() {
        return cy.get('input[placeholder="Please provide a ZIP code."]')
    }

    getAddressTextField() {
        return cy.get('#address')
    }

    getCityTextField() {
        return cy.get('input[placeholder="Please provide a city."]')
    }

    getStateTextField() {
        return cy.get('input[placeholder="Please provide a state."]')
    }

    getContinueButton() {
        return cy.get('button[aria-label="Proceed to payment selection"]')
    }

}
export default addressPage;