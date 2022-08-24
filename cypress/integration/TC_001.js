/// <reference types = "Cypress" />

import dashboardPage from '../integration/pages/dasboardPage'
import loginPage from '../integration/pages/loginPage'
import productsPage from '../integration/pages/productsPage'
import cartPage from '../integration/pages/cartPage'
import addressPage from '../integration/pages/addressPage'
import deliveryPage from '../integration/pages/deliveryPage'
import paymentPage from '../integration/pages/paymentPage'
import checkoutPage from '../integration/pages/checkoutPage'


describe('Perform Automation Testing for OWASP website' , () => {

    beforeEach(() => {
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })  
    })

    it('User successfully Logs-in and Purchase 1 item' , function() {

        const DashboardPage = new dashboardPage()
        const LoginPage = new loginPage()
        const ProductsPage = new productsPage()
        const CartPage = new cartPage()
        const AddressPage = new addressPage()
        const DeliveryPage = new deliveryPage()
        const PaymentPage = new paymentPage()
        const CheckoutPage = new checkoutPage()
        
        // User access the site
        cy.visit('/')
    
        // User navigates site dashboard
        DashboardPage.getWelcomeModal().click()
        DashboardPage.getCookiePopup().click()
        DashboardPage.getAccountButton().click()
        DashboardPage.getLoginButton().click()
    
        // User successfully Logs-in
        LoginPage.getUsernameField().type(this.testdata.username)
        LoginPage.getPasswordField().type(this.testdata.password)
        LoginPage.getLoginButton().click()
    
        // User add at least 1 product to add on the cart
        cy.selectProduct(this.testdata.productone)
        ProductsPage.addedProductComfirmation().click({force:true})
    
        // User proceed to checkout process
        ProductsPage.getBasketButton().click()
        CartPage.verifyProductDisplayed(this.testdata.productone)
        CartPage.getCheckoutButton().click()
    
        // User adds a new Address
        AddressPage.getAddAdressButton().click()
        AddressPage.getCountryTextField().type(this.testdata.country)
        AddressPage.getNameTextField().type(this.testdata.name)
        AddressPage.getMobileTextField().type(this.testdata.mobile)
        AddressPage.getZipCodeTextField().type(this.testdata.zipcode)
        AddressPage.getAddressTextField().type(this.testdata.address)
        AddressPage.getCityTextField().type(this.testdata.city)
        AddressPage.getSubmitButton().click()
    
        // User selects the newly added Address
        cy.selectEntry(this.testdata.name)
        AddressPage.getContinueButton().click()
    
        // User chooses a delivery method
        cy.selectEntry(this.testdata.deliverymethod)
        DeliveryPage.getContinueButton().click()
    
        // User selects payment option
        cy.selectEntry(this.testdata.creditcardname)
        PaymentPage.getContinueButton().click()
    
        // User completes transaction successfully
        CheckoutPage.getContinueButton().click()
        CheckoutPage.getConfirmation()
    
    })

})