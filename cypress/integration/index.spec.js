describe('some stuff', () => {
    it('tests', () => {
        cy.visit('http://localhost:8080/public/index.html');
        cy.contains('This is a react app!');
    })
});