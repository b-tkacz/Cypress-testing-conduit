describe('Login', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('bartosz.tkacz@protonmail.com')
        cy.get('input[type="password"]').type('1234password')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})