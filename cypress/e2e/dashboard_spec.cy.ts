/// <reference types="Cypress" />

describe('User dashboard with user flows.', () => {
  
  beforeEach(() => {
    
    cy.intercept("GET", 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=CoverGirl', {
      statusCode: 200,
      fixture: 'multipleStub.json'
    })
    cy.intercept("GET", 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybe', {
      statusCode: 200,
      fixture: 'multipleStub.json'
    })
    cy.intercept("GET", 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=Maybelline', {
      statusCode: 200,
      fixture: 'multipleStub.json'
    })
    cy.wait(2000)
    cy.visit("http://localhost:3000/") 
  })

  it('Should have a flashy header text', () => {

    cy.get('header')
      .contains('h1', 'Elevate your beauty game with Glam Squad!')
  })

  it('Should have a featured brand tag to display to the user by default', () => {

    cy.get('.featured-container')
      .contains('h3', "Featured Brand: CoverGirl")
  })

  it('Should have a selector with a dropdown menu with several brand options, once selected the featured brand should update', () => {

    cy.get('.select')
      .select("Maybelline")
    cy.get('.featured-container')
      .contains('h3', "Featured Brand: Maybelline")     
  })

  it('Should have visible cards for a brand, they should be clickable to view product details, following being clicked, you should be able to click the logo to return home', () => {

     cy.get('[href="/maybe/495"] > .product-card')
      .click()
    cy.get('.product-info-img')
    cy.get('.product-name')
      .contains("h2", "Corn")
    cy.get('.product-info-container')
      .contains('p', "Brand: Maybe")
    cy.get('.product-info-container')
      .contains('p', 'Price: $ High')
    cy.get('.product-info-container')
      .contains('p', 'Rating: 800')
    cy.get('.product-info-container')
      .contains('p', 'Product Type: Delicious')     
    cy.get('.product-info-container')
      .contains('Really neat')
    cy.get('#header-logo')
      .click()
  })
})

