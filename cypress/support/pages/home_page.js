/// <reference types="cypress" />

export default {
    accessHomePage() {
        cy.visit('/')
            .get('.octicon-mark-github')
            .should('be.visible')
    },

    searchUser(username) {
        cy.get('[data-target="qbsearch-input.inputButtonText"]')
            .should('have.text', 'Search or jump to...')
            .click()
            
        cy.get('#query-builder-test')
            .click()
            .type(username)
    }
}
