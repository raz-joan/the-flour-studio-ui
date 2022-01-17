describe('welcome view / home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    it('should have a header with an h1 and a nav', () => {
        cy.get('header h1').contains('THE FLOUR STUDIO')

        cy.get('header nav').should('exist')
            
        cy.get('nav button').should('have.length', 2)

        cy.get('.nav-button').eq(0).contains('Home')

        cy.get('.nav-button').eq(1).contains('Grains')
    })

    it('should have a main with two sections', () => {
        cy.get('main section').should('have.length', 2)

        cy.get('.scroll-picture-section').should('exist')

        cy.get('.mill-description-section').should('exist')
    })

    it('should have images on page load', () => {
        cy.get('.corn-image').should('have.attr', 'alt').should('include', 'picture of whole kernel green corn')

        cy.get('.miller-image').should('have.attr', 'alt').should('include', 'picture of the miller loading the hopper of the stone mill with grain')

        cy.get('.scoop-of-grain-image').should('have.attr', 'alt').should('include', 'picture of a scoop of wheat berries')
    })

    it('should have an article with information and a button', () => {
        cy.get('.description-article').should('exist')
        
        cy.get('.mill-description').contains('We are both a bakery and a mill. Our choices are entirely guided by a desire to nourish our neighbors and foster community. Our mission at the mill is to support local and regional farmers who use organic and regenerative farming practices and to provide better access to stone ground, whole grain flours from known sources to local restaurants, bakeries, and food makers. Community not commodity! This mill is a 501c3 non profit.')

        cy.get('.description-article button').should('exist')

        cy.get('.view-grains-button').contains('View our Grains!')
    })

    it('should have a footer', () => {
        cy.get('footer').should('exist')

        cy.get('.icon-ref').should('have.attr', 'href').should('include', 'https://www.flaticon.com/free-icons/seed')
    })
})