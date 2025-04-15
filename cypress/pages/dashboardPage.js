class dashboardPage {
    selectorsList() {
        const selectors = {
            sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
            dashboardGrid: '.orangehrm-dashboard-grid',
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }

        return selectors
    }

    dashboard() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid)
    }
}

export default dashboardPage