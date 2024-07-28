/// <reference types="cypress"/>

describe("Network", () => {
  beforeEach(() => {
    cy.visit("/commands/network-requests");
  });
  it("Stub a response to PUT comments", () => {
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
