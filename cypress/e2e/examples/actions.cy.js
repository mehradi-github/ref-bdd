/// <reference types="cypress"/>

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });
  it("check", () => {
    //cy.selectExample("check");
    // cy.get('a[href*="commands/actions"]')
    //   .invoke("removeAttr", "target")
    //   .click({ force: true });
    cy.get('.action-multiple-checkboxes [type="checkbox"]').check(
      "checkbox1",
      "checkbox2"
    );
    cy.get('.action-multiple-checkboxes [type="checkbox"]').should(
      "be.checked"
    );
  });

  it("radio", () => {
    //cy.selectExample("check");
  });

  it("Select", () => {
    // cy.selectExample("check");
  });
});
