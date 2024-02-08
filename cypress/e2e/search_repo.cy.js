/// <reference types="cypress" />

import home_page from "../support/pages/home_page"
import results_page from "../support/pages/results_page"
import user_page from "../support/pages/user_page"

describe('Search', () => {

  beforeEach('Access GitHub page', () => {
    home_page.accessHomePage()
  })

  it('Search for a user on GitHub', () => {
    home_page.searchUser('steffijoji{enter}')
  })

  it('Find search results', () => {
    home_page.searchUser('steffijoji{enter}')
    results_page.accessResultsPage()
  })

  it('Finds user in results', () => {
    home_page.searchUser('steffijoji{enter}')
    results_page.accessResultsPage()
    results_page.findUser()
  })

  it('Access user page', () => {
    home_page.searchUser('steffijoji{enter}')
    results_page.accessResultsPage()
    results_page.findUser()
    user_page.accessUserPage()
  })

  it('Access repositories', () => {
    home_page.searchUser('steffijoji{enter}')
    results_page.accessResultsPage()
    results_page.findUser()
    user_page.accessUserPage()
    user_page.accessRepositories()
    user_page.searchRepo('cypress-practice')
    user_page.accessRepo('cypress-practice')
  })

  it.only('Access repositories', () => {
    home_page.searchUser('steffijoji{enter}')
    results_page.accessResultsPage()
    results_page.findUser()
    user_page.accessUserPage()
    user_page.accessRepositories()
    user_page.searchRepo('cypress-practice')
    user_page.accessRepo('cypress-practice')
    user_page.showReadMe()
  })
})
