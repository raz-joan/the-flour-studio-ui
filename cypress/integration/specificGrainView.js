describe('specific grain view for Turkey Red', () => {
    beforeEach(() => {
        cy.fixture('grains').then((grains) => {
            cy.intercept('GET', 'https://stormy-chamber-80110.herokuapp.com/api/v1/grains', {
                statusCode: 200,
                body: grains
            })
        })

        cy.fixture('reviews').then((reviews) => {
            cy.intercept('GET', 'https://stormy-chamber-80110.herokuapp.com/api/v1/reviews', {
                statusCode: 200,
                body: reviews
            })
        })

        cy.fixture('singleGrain').then((singleGrain) => {
            cy.intercept('GET', 'https://stormy-chamber-80110.herokuapp.com/api/v1/grains/MPHj4b_adK', {
                statusCode: 200,
                body: singleGrain
            })
        })

        cy.visit('http://localhost:3000/grains/MPHj4b_adK')
    })

    it('should have a header with an h1 and a nav', () => {
        cy.get('header h1').contains('THE FLOUR STUDIO')

        cy.get('header nav').should('exist')

        cy.get('nav button').should('have.length', 2)

        cy.get('.nav-button').eq(0).contains('Home')

        cy.get('.nav-button').eq(1).contains('Grains')
    })

    it('should have a grain info section with title, image, and article', () => {
        cy.get('.grain-info-container').should('exist')

        cy.get('.grain-info-container h2').contains('Turkey Red')

        cy.get('.grain-info-container img').should('have.attr', 'alt').should('include', 'image of a brass bowl holding both grain and flour')

        cy.get('.grain-info-scroll').contains('Scroll to leave a review and/or to read reviews.')

        cy.get('.grain-info-container').find('article').should('have.class', 'grain-info-card')
    })

    it('should have grain details', () => {
        cy.get('.grain-info-card p').should('have.length', 7)

        cy.get('.grain-info-detail').eq(0).contains('Classification: Hard Red Winter Wheat')

        cy.get('.grain-info-detail').eq(1).contains('Protein: 13.5%')

        cy.get('.grain-info-detail').eq(2).contains('Organic?: Yes, Grown in: Colorado')

        cy.get('.grain-info-detail').eq(3).contains('Flavor: Malty and Sweet')

        cy.get('.grain-info-detail').eq(4).contains('Texture: Fine and slightly sandy.')

        cy.get('.grain-info-detail').eq(5).contains('Baking Characteristics: Performs well in bread, pizza dough, crackers, cookies, pie crusts, muffins, and biscuits. Truly is an all-purpose whole wheat.')

        cy.get('.grain-info-detail').eq(6).contains('History: It was brought from Crimea to Kansas by Mennonite farmers in the 1870\'s.')
    })

    it('should have a form with the correct elements', () => {
        cy.get('.review-form').should('exist')

        cy.get('.review-form h3').contains('Leave a Review!')

        cy.get('.review-form label').should('have.length', 3)

        cy.get('.review-label').eq(0).contains('The name that you would like to appear on the review: ')

        cy.get('.review-label').eq(1).contains('Your rating from 1 to 5 (low to high): ')

        cy.get('.review-label').eq(2).contains('What would you like to share with other grain enthusiasts? ')

        cy.get('.review-form input').should('have.length', 2)

        cy.get('.review-form textarea').should('have.length', 1)

        cy.get('.review-form').find('button').should('have.class', 'review-form-button')

        cy.get('.review-form-button').contains('Submit my Review!')
    })

    it('should contain a review section', () => {
        cy.get('.review-container').should('exist')

        cy.get('.review-container h3').contains('Reviews . . .')

        cy.get('.review-container-no-reviews').should('not.exist')

        cy.get('.customer-review-title').contains('Happy Baker gave Turkey Red a rating of 5 on 2021/12/20')

        cy.get('.customer-review p').contains('Love the full flavor and texture of this whole wheat flour. It\'s performed great in sourdough bread and in chocolate chip cookies!')
    })
})