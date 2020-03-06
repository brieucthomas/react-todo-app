describe('/not-found', () => {
  before(() => {
    cy.visit('/unsupported-path')
  })

  it('greets with Not Found', () => {
    cy.contains('h1', 'Not Found')
  })

  it('greets with Ooooups!', () => {    
    cy.contains('p', '404')
    cy.contains('p', 'Ooooups! Looks like you got lost.')
  })

  it('links to /', () => {
    cy.get('[data-testid="back"]').should('have.attr', 'href', '/')
  })
})