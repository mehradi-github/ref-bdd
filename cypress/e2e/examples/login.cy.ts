/// <reference types="cypress"/>

describe("Login", () => {
  const userCredentials = {
    email: "test@test.com",
    password: "PASS",
  };
  it.skip("Login via API (Non UI)", () => {
    cy.request("http://localhost:3000/rest/user/login", userCredentials).then(
      (res) => {
        expect(res.status).to.eq(200);
      }
    );
  });
  it.skip("Login via token (Non UI)", () => {
    cy.request("http://localhost:3000/rest/user/login", userCredentials)
      .its("body")
      .then((body) => {
        const token = body.authentication.token;
        cy.wrap(token).as("userToken");

        cy.visit("http://localhost:3000", {
          onBeforeLoad(browser) {
            const userToken = cy.get("@userToken");
            browser.localStorage.setItem("token", userToken.toString());
          },
        });
        cy.get(".login").click({ force: true });
        cy.get(".message").contains("welcome");
      });
  });
});
