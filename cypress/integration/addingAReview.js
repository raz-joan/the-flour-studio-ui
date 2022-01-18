// these tests require that the server is running on http://localhost:3000/
// and the app to be running on http://localhost:3001/
// you'll need to retart the server to remove the review posted in the second test

describe('user submitting a review', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://localhost:3000/api/v1/grains/OGrDjZPRQ0', {
            "id": "OGrDjZPRQ0",
            "name": "Turkey Red",
            "classification": "Hard Red Winter Wheat",
            "protein": 13.5,
            "hasGluten": true,
            "pricePerLb": 3,
            "grownIn": "Colorado",
            "isOrganic": true,
            "flavor": "Malty and Sweet",
            "texture": "Fine and slightly sandy.",
            "bakingCharacteristics": "Performs well in bread, pizza dough, crackers, cookies, pie crusts, muffins, and biscuits. Truly is an all-purpose whole wheat.",
            "history": "It was brought from Crimea to Kansas by Mennonite farmers in the 1870's.",
            "inStock": true,
            "img": "./images/turkey.jpg"
        })

        cy.visit('http://localhost:3001/grains/OGrDjZPRQ0')
    })

    it('should be able to fill out the form and have the values be stored in local state', () => {
        cy.get('.review-label').eq(0).type('Happy Baker')

        cy.get('.review-label').eq(1).type('5')

        cy.get('.review-text-area').type('I love this grain. It performs great in sourdough bread and is soft enough to use in cookies, too. YUM!')

        cy.get('#customer-name').should('have.value', 'Happy Baker')

        cy.get('#customer-rating').should('have.value', '5')

        cy.get('#customer-note').should('have.value', 'I love this grain. It performs great in sourdough bread and is soft enough to use in cookies, too. YUM!')
    })

    it('should be able to fill out the form and submit a review which will then show', () => {
        cy.get('.review-label').eq(0).type('Happy Baker')

        cy.get('.review-label').eq(1).type('5')

        cy.get('.review-text-area').type('I love this grain. It performs great in sourdough bread and is soft enough to use in cookies, too. YUM!')
        
        cy.get('.review-container-no-reviews h4').contains('No reviews at this time for this grain.')

        cy.get('.customer-review').should('not.exist')
        
        cy.get('.review-form-button').click()

        cy.get('.review-container-no-reviews').should('not.exist')

        cy.get('.customer-review h4').contains('Happy Baker gave Turkey Red a rating of 5 on 2022/01/18')

        cy.get('.customer-review p').contains('I love this grain. It performs great in sourdough bread and is soft enough to use in cookies, too. YUM!')
        
    })
})