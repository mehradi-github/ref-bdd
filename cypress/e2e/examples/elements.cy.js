/// <reference types="cypress"/>

context("Elements", () => {
  beforeEach(() => {});
  it.only("checkbox", () => {
    cy.selectExample("check");
    // cy.get('a[href*="commands/actions"]')
    //   .invoke("removeAttr", "target")
    //   .click({ force: true });
    // cy.get('.action-multiple-checkboxes [type="checkbox"]').check(
    //   checkbox1,
    //   checkbox2
    // );
    // cy.get('.action-multiple-checkboxes [type="checkbox"]').should(
    //   "be.checked"
    // );
  });
});
