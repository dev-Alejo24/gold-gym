// cypress/integration/formsale.spec.js
describe('FormSale Component', () => {
    it('Should submit the form correctly', () => {
      cy.visit('/formsale');
      cy.get('input[name="productName"]').type('Product 1');
      cy.get('input[name="quantity"]').type('10');
      cy.get('form').submit();
      cy.get('.success-message').should('contain', 'Sale submitted successfully');
    });
  });
  