describe('error handling throughout', () => {
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
    })

    it('should have a header and a 404 if the first path segment is anything other than grains', () => {
        cy.visit('http://localhost:3000/potato')

        cy.get('header h1').contains('THE FLOUR STUDIO')

        cy.get('header nav').should('exist')

        cy.get('nav button').should('have.length', 2)

        cy.get('.nav-button').eq(0).contains('Home')

        cy.get('.nav-button').eq(1).contains('Grains')

        cy.get('.url-path-error-message').contains('404: Looks like what you are looking for does not exist!')
    })

    it('should allow the user to navigate out of the 404', () => {
        cy.visit('http://localhost:3000/potato')

        cy.get('.welcome-container').should('not.exist')

        cy.get('.nav-button').eq(0).contains('Home').click()

        cy.get('.welcome-container').should('exist')
    })

    it('should have a header and a 404 if the second path segment is anything other than a grain ID', () => {
        cy.visit('http://localhost:3000/grains/cheese')
            .wait(3000)
        cy.get('header h1').contains('THE FLOUR STUDIO')

        cy.get('header nav').should('exist')

        cy.get('.fetch-error-message').contains('404: Looks like what you are looking for does not exist!')
    })

    it('should give a message to the user if the form is incomplete', () => {
        cy.visit('http://localhost:3000/grains/MPHj4b_adK')

        cy.get('.review-input').eq(0).type('Joan')

        cy.get('.review-input').eq(1).type(5)

        cy.get('.input-error-message').should('not.exist')

        cy.get('.review-form-button').click()

        cy.get('.input-error-message').should('exist')

        cy.get('.input-error-message').contains('All three questions require an answer to submit a review.')
    })
})