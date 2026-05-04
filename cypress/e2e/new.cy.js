import { timers } from '../interfaces/timers'

describe('Prueba piloto', () => {

    it('No lo se', () => {

        cy.visit('https://toolsqa.com/')
        cy.wait(timers.small)

        cy.intercept({
            method: 'GET',
            url: '/api/advertisement'
        }).as('getPage')

        cy.url().should('include', 'toolsqa.com/')

        //cy.wait('@getPage', { timeout: timers.request })

        cy.espera("getPage")

    })
})