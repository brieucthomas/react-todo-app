describe('/edit', () => {
  beforeEach(() => {
    cy.visit('/edit/aePhof2i')
  })

  it('greets with Edit todo', () => {
    cy.contains('h1', 'Edit todo')
  })

  it('navigates to / on successful edition', () => {
    cy.get('[data-testid=text] input').type('Edited todo')
    cy.get('form').contains('Edit').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.findAllByText('Todo edited').should('exist')
  })

  it('navigates to / on successful deletion', () => {
    cy.get('form').contains('Delete').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.findAllByText('Todo deleted').should('exist')
  })  
})