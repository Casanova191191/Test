//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

require('cypress-xpath')
require('cypress-plugin-tab')

describe(' Segundo reto ', () =>{
    //EL nombre de mi prueba
    it(" probando la aplicación", () =>{
       cy.visit("https://computer-database.gatling.io/computers")
       cy.title('eq','Computers database')
       cy.wait(1000)

       //Utilizando el buscador
       cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
       cy.get('#searchsubmit').should("be.visible").click()

       //Para agregar un nuevo registro
       cy.get('#add').should("be.visible").click()
       cy.get("[name='name']").should("be.visible").type("Cypress")
       cy.get("#introduced").should("be.visible").type("2023-03-15").tab()
       .type("2024-03-15")
    //Combo select
    //Para seleccionar un elemento se agregar la funcion .select("ELemento que quiera que elija")
    // Se utiliza los asserts para validar mejor el campo, se le adiciona .should("have.value","16") Que valida que tenga ese elemento value y 16
    cy.get("#company").should("be.visible").select("Nokia").should("have.value","16").wait(1500)
    cy.get('.primary').should("be.visible").click()
    cy.xpath("//input[contains(@id,'searchbox')]").type("Cypress")
    cy.get('#searchsubmit').should("be.visible").click()
    })

})


