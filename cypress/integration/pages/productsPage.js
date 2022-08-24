class productsPage {

    verifyPage() {
        return cy.url().should('include','login')
    }

    getBasketButton() {
        return cy.get('button[aria-label="Show the shopping cart"]')
    }

    getAccountButton() {
        return cy.get('#navbarAccount')
    }

    addedProductComfirmation() {
        return cy.get('div[class="mat-simple-snackbar-action ng-star-inserted"] button[class="mat-focus-indicator mat-button mat-button-base"]')
    }

}

export default productsPage;