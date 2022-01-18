describe('navigation between views', () => {
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

    it('should be able to navigate from the home view to the grain grid view by the nav Grains button', () => {
        cy.visit('http://localhost:3000/')

        cy.get('.scroll-picture-section').should('exist')

        cy.get('.color-match-container').should('not.exist')

        cy.get('.nav-button').eq(1).contains('Grains').click()

        cy.url().should('include', '/grains')

        cy.get('.scroll-picture-section').should('not.exist')

        cy.get('.color-match-container').should('exist')
    })

    it('should be able to navigate from the home view to the grain grid view by the See our Grains! button', () => {
        cy.visit('http://localhost:3000/')
        
        cy.get('.mill-description-section').should('exist')

        cy.get('.grain-grid-container').should('not.exist')

        cy.get('.view-grains-button').click()

        cy.url().should('include', '/grains')

        cy.get('.mill-description-section').should('not.exist')

        cy.get('.grain-grid-container').should('exist')
    })

    it('should be able to navigate from the grains grid view to the home view by the nav Home button', () => {
        cy.visit('http://localhost:3000/grains')

        cy.get('.scroll-picture-section').should('not.exist')

        cy.get('.color-match-container').should('exist')

        cy.get('.nav-button').eq(0).contains('Home').click()

        cy.url().should('not.include', '/grains')

        cy.get('.scroll-picture-section').should('exist')

        cy.get('.color-match-container').should('not.exist')
    })

    it('should be able to navigate from the grains grid view to a specific grain view by the card button', () => {
        cy.visit('http://localhost:3000/grains')
  
        cy.get('.color-match-container').should('exist')

        cy.get('.grain-info-container').should('not.exist')

        cy.get('.grain-card').find('.grain-card-button').contains('See Grain Details').click()

        cy.url().should('include', '/MPHj4b_adK')
        
        cy.get('.color-match-container').should('not.exist')

        cy.get('.grain-info-container').should('exist')
    })
})