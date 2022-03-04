/// <reference types="cypress" />

describe('GeneralMultiStepForm rendering, behavior, and validation', () => {
    it('should render the form when triggered', () => {
        cy.visit('http://localhost:3000/');
        cy.get(`header button:contains("Let's Work Together")`).click();
        cy.wait(600);
        cy.get('[data-cy=GeneralMultiStepForm]').should('be.visible');
    });

    it('should check the SEO and Content checkboxes and Next should be visible', () => {
        cy.get('[data-cy=GeneralMultiStepForm] input[value="SEO"]').click({
            force: true,
        });
        cy.get('[data-cy=GeneralMultiStepForm] input[value="SEO"]').should(
            'be.checked'
        );

        cy.get('[data-cy=GeneralMultiStepForm] input[value="Content"]').click({
            force: true,
        });
        cy.get('[data-cy=GeneralMultiStepForm] input[value="Content"]').should(
            'be.checked'
        );

        cy.get('[data-cy=GeneralMultiStepFirstStepNextBtn]').should(
            'be.visible'
        );
    });

    it('next step button for step 1 should be visible, then invisible', () => {
        cy.get('[data-cy=GeneralMultiStepForm] input[value="SEO"]').click({
            force: true,
        });
        cy.get('[data-cy=GeneralMultiStepForm] input[value="Content"]').click({
            force: true,
        });

        cy.get('[data-cy=GeneralMultiStepFirstStepNextBtn]').should(
            'not.exist'
        );
    });

    it('should move on to step 2 after checking SEO', () => {
        cy.get('[data-cy=GeneralMultiStepForm] input[value="Content"]').click({
            force: true,
        });

        cy.get('[data-cy=GeneralMultiStepFirstStepNextBtn]').click();

        cy.get('p:contains("Do you have a website already? *")').should(
            'be.visible'
        );
    });
});
