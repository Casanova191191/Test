//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

describe("Intro a los asserts ", () =>{
    //EL nombre de mi prueba
    it(" Demos de los asserts ", () =>{
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get("#wsf-1-field-21").should("be.visible").type("Diana")
        cy.wait(1000)
        cy.get("#wsf-1-field-22").should("be.visible").type("Casanova")
        cy.wait(1000)
        cy.get("#wsf-1-field-23").should("be.visible").should("be.enabled").type("diana@gmai.com")
    })

})


