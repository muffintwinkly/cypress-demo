/// <referene types="Cypress"/>
describe('Login/Logout Test', () => {
    before(() => {
        cy.visit("/") 
    });
    it('invalid username, invalid password', () => {
        cy.get('.login').click();
        cy.get('#email').type('invalid@yahoo.com');
        cy.get('#passwd').type('wrongPassword1');
        cy.get('#SubmitLogin > span').click();
        cy.get('#center_column > :nth-child(2) > p').should('contain','There is 1 error');
        cy.get('ol > li').should('contain','Authentication failed.');
    })
    it('invalid username, valid password', () => {
        cy.get('.login').click();
        cy.get('#email').type('invalid@yahoo.com');
        cy.get('#passwd').type('password1');
        cy.get('#SubmitLogin > span').click();
        cy.get('#center_column > :nth-child(2) > p').should('contain','There is 1 error');
        cy.get('ol > li').should('contain','Authentication failed.');
    })
    it('valid username, invalid password', () => {
        cy.get('.login').click();
        cy.get('#email').type('automation0815@yahoo.com');
        cy.get('#passwd').type('wrongPassword1');
        cy.get('#SubmitLogin > span').click();
        cy.get('#center_column > :nth-child(2) > p').should('contain','There is 1 error');
        cy.get('ol > li').should('contain','Authentication failed.');
    })
    it('empty username, empty password', () => {
        cy.get('.login').click();
        cy.get('#email').focus().blur();
        cy.get('#passwd').focus().blur();
        cy.get('#SubmitLogin > span').click();
        cy.get('#center_column > :nth-child(2) > p').should('contain','There is 1 error');
        cy.get('ol > li').should('contain','An email address required.');

    })
    it('valid username, valid password', () => {
        cy.get('.login').click();
        cy.get('#email').type('automation0815@yahoo.com');
        cy.get('#passwd').type('password1');
        cy.get('#SubmitLogin > span').click();
        cy.get('.account > span').should('contain','Issy Im');
    })
});


