/// <reference types="cypress" />

describe("Login Page Test", () => {

  before(() => {
    cy.visit("https://stgchrome.paradox.ai/automation-engineer-assignment/")
  })

  it("Login Screen Test 1", () => {
    cy.get('[data-test="email-login-input"]').should('exist')
    cy.get('[data-test="email-login-submit-button"]').should('exist')
    cy.get('.checkbox_span').should('exist')

    cy.get('.checkbox_span').click()
      .should('not.be.checked')
      
    //cy.get('.checkbox_span').click()
    //  .should('be.checked')
    cy.get('[data-test="email-login-input"]').type('thisemaildoesnotexist@not.exist{enter}')

    cy.on("window:alert", txt => {
      expect(txt).to.contain("Something Went Wrong");
    });

    cy.get('[data-test="email-login-input"]').clear().type('rnd.extension+tariqganem@paradox.ai')
    cy.get('[data-test="email-login-submit-button"]').click()
    cy.get('.login-password').should('exist')

    cy.get('[data-test="lookup-email-paragraph"]').should('contain', 'rnd.extension+tariqganem@paradox.ai')

    cy.get('[data-test="signin-button"]').should('exist')
    cy.get('[data-test="submit-password-cancel"]').should('exist')
    cy.get('.checkbox_span').should('exist')
    cy.get('[data-test="forgot-password"] > p').should('exist')

    cy.get('[data-test="submit-password-cancel"]').click()

    cy.get('.login_page').should('exist')
    cy.get('[data-test="email-login-input"]').should('have.value', 'rnd.extension+tariqganem@paradox.ai')

    cy.get('[data-test="email-login-submit-button"]').click()
    cy.get('.login-password').should('exist')

    cy.get('[data-test="forgot-password"] > p').click()
    
  });
});

