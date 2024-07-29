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
});
