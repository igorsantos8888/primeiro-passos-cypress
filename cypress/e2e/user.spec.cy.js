import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const myInfo = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it.only('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboard.dashboard()

    myInfo.accessMyInfoPage()
    myInfo.myInfoUpdateUser('Arthur', 'Antunes', 'Zico', 'Jogador', 'OtherId', 'DriverLicenseId', '2025-03-26')


    /* 
      cy.get(this.selectorsList().firstNameField).clear().type('Arthur')
        cy.get(this.selectorsList().lastNameField).clear().type('Antunes')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('Jogador')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherId')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('DriverLicenseId')
        cy.get(this.selectorsList().genericField).eq(6).clear().type('2025-03-26')
    
    */


  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

})