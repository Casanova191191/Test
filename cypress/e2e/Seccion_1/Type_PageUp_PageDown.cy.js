//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

describe('Ejemplo de type pageup y pagedown', () =>{
    //EL nombre de mi prueba
    it(" Type PageUp ", () =>{
       cy.visit("https://demoqa.com/text-box")
       cy.title().should('eq','DEMOQA')
       cy.wait(1000)

       cy.get("#userName").type('{pageup}')
       cy.wait(2000)
    })

// La funcion ONLY le estoy diciendo a cypress que solo me corra esa parte del código
    it.only(" Type PageDown ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
 
        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
     })

})

