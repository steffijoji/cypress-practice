/// <reference types="cypress" />

export default {
    accessUserPage() {
        cy.get('.p-nickname.vcard-username.d-block')
            .should('contain.text', 'steffijoji')
    }
}
