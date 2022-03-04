/// <reference types="cypress" />

describe('Basic homepage behaviors', () => {
    it('should render QuickSettingsToggle', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=quickSettingsToggle]');
    });

    it('QuickSettingsToggle should toggle visibility of color and form toggles', () => {
        cy.get('[data-cy=quickSettingsToggle]').click();
        cy.get('[data-cy=formModalToggle]').should('be.visible');
        cy.get('[data-cy=themeColorToggle]').should('be.visible');
        cy.get('[data-cy=quickSettingsToggle]').click();
        cy.get('[data-cy=formModalToggle]').should('not.be.visible');
        cy.get('[data-cy=themeColorToggle]').should('not.be.visible');
    });

    it('clicking theme toggle should alter html background color', () => {
        cy.get('[data-cy=quickSettingsToggle]').click();
        cy.get('[data-cy=themeColorToggle]').click();
        cy.get('html').should(
            'have.css',
            'background-color',
            'rgb(47, 73, 94)'
        );
        cy.get('[data-cy=themeColorToggle]').click();
        cy.get('html').should(
            'have.css',
            'background-color',
            'rgb(255, 255, 255)'
        );
        cy.get('[data-cy=quickSettingsToggle]').click();
    });

    it('should open and close MutliStepFormPortal when clicked', () => {
        cy.get('[data-cy=quickSettingsToggle]').click();
        cy.get('[data-cy=formModalToggle]').click();
        cy.get('[data-cy=GeneralMultiStepFormPortal]').should('be.visible');
        cy.get('[data-cy=GeneralMultiStepFormPortal]')
            .find('button[title="Close"]')
            .click();
        cy.get('[data-cy=GeneralMultiStepFormPortal]').should('not.be.visible');
    });
});
