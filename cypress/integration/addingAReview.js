describe('user submitting a review', () => {
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

    it('should be able to fill out the form and have the values be stored in local state', () => {
        cy.get('.review-label').eq(0).type('Happy Baker')

        cy.get('.review-label').eq(1).type('5')

        cy.get('.review-text-area').type('I love this grain. It performs great in sourdough bread and is soft enough to use in cookies, too. YUM!')

        cy.get('#customer-name').should('have.value', 'Happy Baker')

        cy.get('#customer-rating').should('have.value', '5')

        cy.get('#customer-note').should('have.value', 'I love this grain. It performs great in sourdough bread and is soft enough to use in cookies, too. YUM!')
    })

    it('should be able to fill out the form, submit a review, and see failure message if the POST fails', () => {
        cy.intercept('POST', 'https://stormy-chamber-80110.herokuapp.com/api/v1/reviews', {
            statusCode: 422,
            body: {
                error: `Expected format: { name: <String>, customerName: <String>, date: <String>, rating: <Number>, note: <String> }. You're missing a "none" property.`
            }
        })

        cy.get('.review-label').eq(0).type('Happy Baker')

        cy.get('.review-label').eq(1).type('5')

        cy.get('.review-text-area').type('I love this grain. It performs great in sourdough bread and is soft enough to use in cookies, too. YUM!')

        cy.get('.review-error-message').should('not.exist')

        cy.get('.review-form-button').click()

        cy.get('.review-error-message').should('exist')

        cy.get('.review-error-message').contains('Review was unable to post, please try again.')
    })

    it('should be able to fill out the form, submit, and see their review', () => {
        cy.intercept('POST', 'https://stormy-chamber-80110.herokuapp.com/api/v1/reviews', {
            statusCode: 201,
            body: {
                message: 'New review was successfully added!',
                newReview: {
                    id: "6sbjmyPDZd",
                    name: "Turkey Red",
                    customerName: "Joan R",
                    date: "2021/12/20", rating: 3,
                    note: "It was not much different than the grocery store, but was twice in cost."
                }
            }
        })

        cy.get('.customer-review-title').contains('Happy Baker gave Turkey Red a rating of 5 on 2021/12/20').should('exist')

        cy.get('.customer-review-title').contains('Joan R gave Turkey Red a rating of 3 on 2021/12/20').should('not.exist')
        
        cy.get('.review-label').eq(0).type('Joan R')
        
        cy.get('.review-label').eq(1).type('3')
        
        cy.get('.review-text-area').type('It was not much different than the grocery store, but was twice in cost.')
        
        cy.intercept('GET', 'https://stormy-chamber-80110.herokuapp.com/api/v1/reviews', {
            statusCode: 200,
            body: {
                "reviews": [
                    {
                        "id": "6sbjmyPDZd",
                        "name": "Turkey Red",
                        "customerName": "Joan R",
                        "date": "2021/12/20",
                        "rating": 3,
                        "note": "It was not much different than the grocery store, but was twice in cost."
                    }
                ]
            }
        }).as('secondReviews')
        
        cy.get('.review-form-button').click()
            .wait('@secondReviews')
        
        cy.get('.review-error-message').should('not.exist')
        
        cy.get('.customer-review-title').contains('Joan R gave Turkey Red a rating of 3 on 2021/12/20')

        cy.get('.customer-review-note').contains('It was not much different than the grocery store, but was twice in cost.')
    })
})