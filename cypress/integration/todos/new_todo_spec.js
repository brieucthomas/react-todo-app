describe('/new', () => {
  before(() => {
    cy.visit('/new')
  })

  it('greets with Add new todo', () => {
    cy.contains('h1', 'Add new todo')
  })

  it('requires text', () => {
    cy.get('form').contains('Add').click()
    cy.get('[data-testid=text] p').should('contain', 'Required')
  })

  it('navigates to / on successful creation', () => {
    cy.get('[data-testid=text] input').type('A new todo')
    cy.get('form').contains('Add').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.findAllByText('Todo created').should('exist')
  })
})