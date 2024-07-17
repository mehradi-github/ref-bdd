/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    //cy.visit("https://example.cypress.io/commands/actions");
  });
  it("Handling alerts", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });
  it.only("Handling confirm", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      // expect(str).to.equal("I am an alert box!");
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });
});
