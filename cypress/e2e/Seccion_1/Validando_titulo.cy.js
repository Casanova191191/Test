//Para que complete los comandos de Cypress
/// <reference types = "cypress"/> 

describe(' Validando el título ', () =>{
    //EL nombre de mi prueba
    it("  Test validar el título ", () =>{
       cy.visit("https://demoqa.com/text-box")
       //should una funcion para validar
       //eq valida el texto , enceguida lo que se quiera validar 
       cy.title().should('eq','DEMOQA')

       cy.log("Funciono OK")
    })

})