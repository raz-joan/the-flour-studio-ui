// these tests require that the server is running on http://localhost:3000/
// and the app to be running on http://localhost:3001/

describe('navigation between views', () => {
    it('should be able to navigate from the home view to the grain grid view by the nav Grains button', () => {
        cy.visit('http://localhost:3001/')

        cy.get('.scroll-picture-section').should('exist')

        cy.get('.color-match-container').should('not.exist')

        cy.get('.nav-button').eq(1).contains('Grains').click()

        cy.url().should('include', '/grains')

        cy.get('.scroll-picture-section').should('not.exist')

        cy.get('.color-match-container').should('exist')
    })

    it('should be able to navigate from the home view to the grain grid view by the See our Grains! button', () => {
        cy.visit('http://localhost:3001/')
        
        cy.get('.mill-description-section').should('exist')

        cy.get('.grain-grid-container').should('not.exist')

        cy.get('.view-grains-button').click()

        cy.url().should('include', '/grains')

        cy.get('.mill-description-section').should('not.exist')

        cy.get('.grain-grid-container').should('exist')
    })

    it('should be able to navigate from the grains grid view to the home view by the nav Home button', () => {
        cy.visit('http://localhost:3001/grains')
        cy.get('.scroll-picture-section').should('not.exist')

        cy.get('.color-match-container').should('exist')

        cy.get('.nav-button').eq(0).contains('Home').click()

        cy.url().should('not.include', '/grains')

        cy.get('.scroll-picture-section').should('exist')

        cy.get('.color-match-container').should('not.exist')
    })

    it('should be able to navigate from the grains grid view to a specific grain view by the card button', () => {
        cy.visit('http://localhost:3001/grains')
  
        cy.get('.color-match-container').should('exist')

        cy.get('.grain-info-container').should('not.exist')

        cy.get('.grain-card').find('.grain-card-button').contains('See Grain Details').click()

        cy.get('.color-match-container').should('not.exist')

        cy.get('.grain-info-container').should('exist')
    })
})