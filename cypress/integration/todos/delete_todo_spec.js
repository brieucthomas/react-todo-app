describe('/edit', () => {
  before(() => {
    cy.visit('/edit/aePhof2i')
  })

  it('greets with Edit todo', () => {
    cy.contains('h1', 'Edit todo')
  })

  it('navigates to / on successful deletion', () => {
    cy.get('form').contains('Delete').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})