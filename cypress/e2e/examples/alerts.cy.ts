/// <reference types="cypress" />

context("Alerts", () => {
  beforeEach(() => {
    //cy.visit("https://example.cypress.io/commands/actions");
    cy.visit("https://webdriveruniversity.com");
  });
  it("Handling alerts", () => {
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });
  it("Handling confirm", () => {
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
  it("Handling confirm via stubs", () => {
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      });
  });
});
