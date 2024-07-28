/// <reference types="cypress"/>

describe("Network", () => {
  beforeEach(() => {});
  it("use a fixture file's content", () => {
    cy.visit("/commands/files");

    cy.intercept(
      {
        method: "GET",
        url: "**/comments/*",
      },
      { fixture: "user.json" }
    ).as("getComment");
    cy.get(".fixture-btn").click({ force: true });
    cy.wait("@getComment")
      .its("response.body")
      .should("have.property", "name")
      .and("include", "Jane");
  });
  it("Stub a response to PUT comments", () => {
    cy.visit("/commands/network-requests");
    const message = "whoa, this comment does not exist";
    cy.intercept(
      {
        method: "PUT",
        url: "**/comments/*",
      },
      {
        statusCode: 404,
        body: { error: message },
        headers: { "access-control-allow-origin": "*" },
        delayMs: 500,
      }
    ).as("putComment");
    cy.get(".network-put").click({ force: true });
    cy.wait("@putComment");
    cy.get(".network-put-comment").should("contain", message);
  });
});
