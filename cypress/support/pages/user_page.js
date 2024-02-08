/// <reference types="cypress" />

export default {
    accessUserPage() {
        cy.get('.p-nickname.vcard-username.d-block')
            .should('contain.text', 'steffijoji')
    },

    accessRepositories() {
        cy.get('main > div.mt-4 * > a:nth-child(2)')
            .click()
    },

    searchRepo(repoName) {
        cy.get('#your-repos-filter')
            .should('be.visible')
            .click()
            .type(repoName)

        cy.get('.user-repo-search-results-summary')
            .should('contain.text', repoName)
    },

    accessRepo(repoName) {
        cy.contains('a', repoName)
            .should('be.visible')
            .click()
    },

    showReadMe() {
        cy.get('#repo-content-pjax-container * > p:nth-child(6)')
            .scrollIntoView()
    }
}
