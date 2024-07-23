/// <reference types="cypress"/>

context("Actions", () => {
  beforeEach(() => {
    cy.visit("commands/actions", { timeout: 60000 });
  });
  it("check", () => {
    //cy.selectExample("check");
    // cy.get('a[href*="commands/actions"]')
    //   .invoke("removeAttr", "target")
    //   .click({ force: true });
    cy.get('.action-multiple-checkboxes [type="checkbox"]').check([
      "checkbox1",
      "checkbox2",
    ]);
    cy.get('.action-multiple-checkboxes [type="checkbox"]').should(
      "be.checked"
    );
  });

  it("radio", () => {
    cy.get(".action-checkboxes [disabled]").as("radio");
    cy.get("@radio").check({ force: true });
    cy.get("@radio").should("be.checked");
  });

  it("Select", () => {
    cy.get(".action-select").as("select");
    cy.get("@select").select("fr-oranges");
    cy.get("@select").should("have.value", "fr-oranges");

    cy.get(".action-select-multiple").as("selectMulti");
    cy.get("@selectMulti").select(["apples", "oranges", "bananas"]);
    cy.get("@selectMulti")
      .invoke("val")
      .should("deep.equal", ["fr-apples", "fr-oranges", "fr-bananas"]);

    cy.get("@selectMulti").invoke("val").should("include", "fr-apples");
  });

  it("Trigger", () => {
    cy.get(".trigger-input-range").as("range");
    cy.get("@range").invoke("val", 25);
    cy.get("@range").trigger("change");
    cy.get("@range")
      .get('input[type="range"')
      .siblings("p")
      .should("have.text", "25");
  });
});

describe("Actions with host", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("host"));
  });
  it("AutoComplete", () => {
    cy.wait(3000);
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");
    const expectedText = "Avacado";
    cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
      if ($el.text() === expectedText) {
        $el.trigger("click");
        cy.get("#submit-button").click();
        cy.url().should("include", expectedText);
      }
      debugger;
    });
    cy.screenshot("Screenshot from autoComplete");
  });
});
