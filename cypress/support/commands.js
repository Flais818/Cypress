import { timers } from "../interfaces/timers"

Cypress.Commands.add('escribir', (selector, texto) => {
    cy.get(selector).should('be.visible').type(texto)
})

Cypress.Commands.add('espera', (alias) => {
    cy.wait(`@${alias}`, { timeout: timers.request })
})
