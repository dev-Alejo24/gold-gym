// cypress/integration/navbar.spec.js
describe('Navbar Component', () => {
    it('Should render Navbar correctly', () => {
      cy.visit('/');
      cy.get('nav').should('exist');
      cy.get('nav').contains('Home').should('exist');
    });
  
    it('Should navigate to the correct page when clicking links', () => {
      cy.visit('/');
      cy.get('nav').contains('Home').click();
      cy.url().should('include', '/home');
    });
  });
  