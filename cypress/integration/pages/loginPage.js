class loginPage {

    getUsernameField() {
        return cy.get('#email')
    }

    getPasswordField() {
        return cy.get('#password')
    }

    getLoginButton() {
        return cy.get('#loginButton')
    }
    
}
export default loginPage;