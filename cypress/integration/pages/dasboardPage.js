class dashboardPage {

    getWelcomeModal() {
        return cy.get('.close-dialog').should('be.visible')
    }

    getCookiePopup() {
        return cy.get('.cc-btn').should('be.visible')
    }

    getAccountButton() {
        return cy.get('#navbarAccount').should('be.visible')
    }

    getLoginButton() {
        return cy.get('#navbarLoginButton').should('be.visible')
    }

    getSearchBar() {
        return cy.get('#searchQuery').should('be.visible')
    }

}
export default dashboardPage