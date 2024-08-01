import {
  Before,
  Given,
  When,
  defineStep as And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

let stub: Cypress.Agent<sinon.SinonStub>;
Before(() => {
  cy.log("Login ...");
  stub = cy.stub();
});
Given("I access the login page", () => {
  cy.visit(Cypress.env("host") + "/Login-Portal/index.html");
});
When("I enter a username {word}", (username: string) => {
  cy.get("#text").type(username);
});
And("I enter a password {word}", (password: string) => {
  cy.get("#password").type(password);
});
And("I click on login button", () => {
  cy.get("#login-button").click({ force: true });
  cy.on("window:alert", stub);
});
Then(
  "I should be presented with the following message {word} {word}",
  (msg1: string, msg2: string) => {
    const expectedMessage = msg1 + " " + msg2;
    expect(stub.getCall(0)).to.be.calledWith(expectedMessage);
  }
);
