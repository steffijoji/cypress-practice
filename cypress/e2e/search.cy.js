/// <reference types="cypress" />

import home_page from "../support/pages/home_page"

describe('Search', () => {

  beforeEach('Access GitHub page', () => {
    home_page.accessHomePage()
  })

  it('Search for a user on GitHub', () => {
    home_page.searchUser('steffijoji{enter}')
  })
})
