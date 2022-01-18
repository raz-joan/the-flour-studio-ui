// these tests require that the server is running on http://localhost:3000/
// and the app to be running on http://localhost:3001/

describe('error handling throughout', () => {
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
    })

    it('should have a header and a 404 if the first path segment is anything other than grains', () => {
        cy.visit('http://localhost:3001/potato')

        cy.get('header h1').contains('THE FLOUR STUDIO')

        cy.get('header nav').should('exist')

        cy.get('nav button').should('have.length', 2)

        cy.get('.nav-button').eq(0).contains('Home')

        cy.get('.nav-button').eq(1).contains('Grains')

        cy.get('.url-path-error-message').contains('404: Looks like what you are looking for does not exist!')
    })

    it('should allow the user to navigate out of the 404', () => {
        cy.visit('http://localhost:3001/potato')

        cy.get('.welcome-container').should('not.exist')

        cy.get('.nav-button').eq(0).contains('Home').click()

        cy.get('.welcome-container').should('exist')
    })

    it('should have a header and a 404 if the second path segment is anything other than a grain ID', () => {
        cy.visit('http://localhost:3001/grains/cheese')

        cy.get('header h1').contains('THE FLOUR STUDIO')

        cy.get('header nav').should('exist')

        cy.get('.fetch-error-message').contains('404: Looks like what you are looking for does not exist!')
    })

    it('should give a message to the user if the form is incomplete', () => {
        cy.visit('http://localhost:3001/grains/OGrDjZPRQ0')

        cy.get('.review-input').eq(0).type('Joan')

        cy.get('.review-input').eq(1).type(5)

        cy.get('.input-error-message').should('not.exist')

        cy.get('.review-form-button').click()

        cy.get('.input-error-message').should('exist')

        cy.get('.input-error-message').contains('All three questions require an answer to submit a review.')
    })
})