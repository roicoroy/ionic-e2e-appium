import { customCommand } from "cypress/support/commands";

describe('Home Page test', () => {
    before(() => {
    });
    it('Should visit the home page and check the page title', () => {
        cy.visit('/home');
        cy.get('ion-title').contains('Date Picker');
    });
    it('Should test the function', () => {
        cy.visit('/home');
        customCommand("hello")
    });
});
