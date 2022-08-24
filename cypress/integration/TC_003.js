/// <reference types = "Cypress" />

import dashboardPage from '../integration/pages/dasboardPage'
import loginPage from '../integration/pages/loginPage'
import productsPage from '../integration/pages/productsPage'

describe('Perform Automation Testing for OWASP website' , () => {

    beforeEach(() => {
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })  
    })

    it('User successfully validates search fuctionality' , function() {

        const DashboardPage = new dashboardPage()
        const LoginPage = new loginPage()
        const ProductsPage = new productsPage()

        
        // User access the site
        cy.visit('/')
    
        // User navigates site dashboard
        DashboardPage.getWelcomeModal().click()
        DashboardPage.getCookiePopup().click()

        // User enters apple on the search field
        DashboardPage.getSearchBar().type('Apple{enter}')
        cy.verifyDisplayedProducts('Apple','Banana')

    



    
    })

})