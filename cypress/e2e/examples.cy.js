/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    //cy.visit("https://example.cypress.io/commands/actions");
  });
  it.only("", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });
});
