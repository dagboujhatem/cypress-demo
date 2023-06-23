describe('template spec', () => {
  it('passes', () => {
    // changer le viewport dans le test courant 
    // Additionally, you can override this value in your cypress.config.js or via the cy.viewport() command.
    cy.viewport("iphone-6")
    cy.visit('https://example.cypress.io')
    // take a screenshot
    cy.screenshot("capture-responsive");
  })
})