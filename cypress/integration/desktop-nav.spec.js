/// <reference types="cypress" />

describe('Basic homepage behaviors', () => {
    it('should render desktop navigation', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=DesktopNav]');
    });

    it('should navigate to SEO Services page', () => {
        cy.get('.desktopNavLinkContainer .desktopNavLink')
            .contains('SEO')
            .click();

        cy.location('pathname').should('include', 'seo-services');
        cy.wait(2000);
        cy.get('h1').should('include.text', 'Traffic You Deserve');
    });

    it('should navigate to off-page SEO on SEO Services Page', () => {
        cy.get('.desktopNavLinkContainer .desktopNavLink')
            .contains('SEO')
            .next()
            .find('a:contains("Local SEO")')
            .click({ force: true });

        //assert whether lazily loaded image in this section is visible for scroll confirmation
        cy.get('#localSEO img').should('be.visible');
    });
});
