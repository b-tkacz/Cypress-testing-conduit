describe('Create  and mark-unmark as favorite', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        cy.get('input[type="email"]').type('bartosz.tkacz@protonmail.com')
        cy.get('input[type="password"]').type('1234password')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })

    it('Create post', function(){
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').type('Test title')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test about')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Lorem ipsum')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })

    it('Mark-unmark as favorite', function(){
        cy.get('.nav-link').contains('Bartosz').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go(-1)
    })
}) 