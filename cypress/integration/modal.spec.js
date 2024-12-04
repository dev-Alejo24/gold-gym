// cypress/integration/modal.spec.js
describe('Modal Component', () => {
    it('Should open and close the modal correctly', () => {
      cy.visit('/');
      cy.get('button.open-modal').click();
      cy.get('.modal').should('be.visible');
      cy.get('button.close-modal').click();
      cy.get('.modal').should('not.be.visible');
    });
  });
  