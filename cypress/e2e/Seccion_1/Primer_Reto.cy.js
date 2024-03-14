//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

require('cypress-plugin-tab')

describe(' Primer reto ', () =>{
    //EL nombre de mi prueba
    it("  ", () =>{
       cy.visit("https://demoqa.com/webtables")
       cy.title('eq','DEMOQA')
       cy.wait(1000)

       // campo buscador 
       cy.get('#searchBox').should("be.visible").type("cierra")
       cy.wait(1500)
       //.clear limpia el campo 
       cy.get('#searchBox').should("be.visible").clear()

       //Agregando más campos
       cy.get('#addNewRecordButton').should("be.visible").click()
       cy.wait(1000)
       //Opcion hecha con tabulador .tab() requiere agregar la libreria= require('cypress-plugin-tab') encima del describe
       cy.get('#firstName').should("be.visible").type("Diana").tab()
       .type("Casanova").tab()
       .type("diana@gmail.com").tab()
       .type("31").tab()
       .type("100").tab()
       .type("Development")
       cy.wait(1000)
       cy.get('#submit').should("be.visible").click()

       cy.get('#searchBox').should("be.visible").type("Diana")
       cy.wait(1500) 
       cy.get('#searchBox').should("be.visible").clear()

       //Editar campos 
       // se limpia el campo primero y luego se pone la nueva información
       cy.get('#edit-record-4').should("be.visible").click() 
       cy.wait(1000)       
       cy.get('#age').should("be.visible").clear().type("35")
       cy.wait(1000)
       cy.get('#salary').should("be.visible").clear().type("500")
       cy.wait(1000)
       cy.get('#submit').should("be.visible").click() 
       cy.wait(2000)

       //Para eliminar un registro
       cy.get('#delete-record-3').should("be.visible").click() 


    })

})


