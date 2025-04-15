class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            middleNameField: '[name="middleName"]',
            genericField: '.oxd-input--active',
            dateField: '[placeholder="yyyy-dd-mm"]',
            genericCombobox: '.oxd-select-text--active',
            dateCloseButton: '.--close',
            submitButtonSave: '[type="submit"]',
            mesageClose: '.oxd-toast-close',
        }

        return selectors
    }

    accessMyInfoPage() {
        cy.visit('/pim/viewPersonalDetails/empNumber/7')
    }

    myInfoUpdateUser(firstName, lastName, middleName, employeeId, otherId, driverLicenseNumber, licenseExpiryDate 
    ) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()


        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get('.oxd-select-dropdown > :nth-child(55)').click()

        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()

        cy.get(this.selectorsList().submitButtonSave).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get(this.selectorsList().mesageClose)
    }
}


export default MyInfoPage