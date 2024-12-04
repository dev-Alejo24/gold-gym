import React from 'react'
import FormSale from './FormSale'

describe('<FormSale />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormSale />)
  })
})