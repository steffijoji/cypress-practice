/// <reference types="cypress" />

export default {
    accessUserPage() {
        cy.get('.p-nickname.vcard-username.d-block')
            .should('contain.text', 'steffijoji')
    },

    accessRepositories() {
        cy.get('main > div.mt-4 * > a:nth-child(2)')
            .click()
    }
}
