describe('Homepage Test', () => {
  it('visits the homepage and checks title', () => {
    cy.visit('/');
    cy.title().should('include', 'NIKKY TECH CONSULTING INC – Innovate. Transform');
  });
});

