/// <reference types="cypress" />

export default {
    accessResultsPage() {
        cy.get('.Box-sc-g0xbh4-0.cgQapc')
            .should('contain.text', 'results')
    },

    findUser() {
        cy.get('#\\:Rpsrapl\\:--label')
            .should('have.text', 'Users')
            .click()

        cy.get('.Text-sc-17v1xeu-0.kulXsl')
            .should('have.text', 'steffijoji')
            .click()
    }
}