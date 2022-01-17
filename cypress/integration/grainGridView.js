describe('grain grid view', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/grains')
    })

    it('should have a header with an h1 and a nav', () => {
        cy.get('header h1').contains('THE FLOUR STUDIO')

        cy.get('header nav').should('exist')

        cy.get('nav button').should('have.length', 2)

        cy.get('.nav-button').eq(0).contains('Home')

        cy.get('.nav-button').eq(1).contains('Grains')
    })

    it('should have a key indicating grains with and without gluten', () => {
        cy.get('.color-match-container').should('exist')

        cy.get('.single-match-container').should('have.length', 2)

        cy.get('.gluten-state-tag').eq(0).contains('Grains WITH Gluten')

        cy.get('.gluten-state-tag').eq(1).contains('Grains WITHOUT Gluten')
    })

    it('should have a section with 20 cards', () => {
        cy.get('section').should('have.class', 'grain-grid-container')

        cy.get('.grain-card').should('have.length', 20)
    })

    it('should have the correct info on each card', () => {
        cy.get('.grain-card').eq(0).should('exist')

        cy.get('.grain-card').eq(0).find('div').should('have.class', 'color-circle-blue')

        cy.get('.grain-card').eq(0).find('.grain-card-title').contains('Turkey Red')

        cy.get('.grain-card').eq(0).find('.grain-card-info').eq(0).contains('Hard Red Winter Wheat')

        cy.get('.grain-card').eq(0).find('.grain-card-info').eq(1).contains('$3 / lb')

        cy.get('.grain-card').eq(0).find('.green').contains('In Stock')

        cy.get('.grain-card').find('.grain-card-button').contains('See Grain Details')
    })
})