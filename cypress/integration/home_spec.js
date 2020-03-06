describe('/', () => {
  before(() => {
    cy.visit('/')
  })

  it('greets with TodoList', () => {
    cy.contains('h1', 'TodoList')
  })

  it('list all todos', () => {
    cy.get('[data-testid=todos-item]').should('have.length', 4)
    cy.contains('span', 'Boglioli suit fitting')
    cy.contains('span', 'Final design delivery')
    cy.contains('span', 'Lauch run meeting')
    cy.contains('span', 'Record techno mixtape')
  })

  it('list completed todos', () => {    
    cy.contains('Completed').click()
    cy.get('[data-testid=todos-item]').should('have.length', 1)
    cy.contains('span', 'Lauch run meeting')
  })

  it('list active todos', () => {
    cy.contains('Active').click()
    cy.get('[data-testid=todos-item]').should('have.length', 3)
    cy.contains('span', 'Boglioli suit fitting')
    cy.contains('span', 'Final design delivery')
    cy.contains('span', 'Record techno mixtape')
  })

  it('links to /edit/aePhof2i', () => {
    cy.contains('span', 'Boglioli suit fitting').click()
    cy.url().should('include', '/edit/aePhof2i')
  })
})