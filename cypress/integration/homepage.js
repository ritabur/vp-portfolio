describe('Homepage', () => {
    it('should have all the necessary homepage components in place', () => {
        cy.visit('/');
        cy.get('[data-cy=homepage-headline]').should('exist');
        cy.get('[data-cy=audio-gallery]').should('exist');
    });
});
