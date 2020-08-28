describe('Layout', () => {
    it('should have all the necessary layout components in place', () => {
        cy.visit('/');
        cy.get('[data-cy=desktop-navbar]').should('exist');
        cy.get('[data-cy=footer]').should('exist');
    });
});
