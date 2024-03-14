//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

describe(' Segunda parte de los assserts ', () =>{
    //EL nombre de mi prueba
    it(" Aserts ", () =>{
       cy.visit("https://testingqarvn.com.es/datos-personales/")
       cy.wait(1000)

       cy.get('#wsf-1-field-21').type("Diana")
       cy.get('#wsf-1-field-22').type("casanoca")

       cy.get('#wsf-1-field-27').click()

//Para validar un campo, se selecciona y en el should se pone el have.text, rodrigo
       cy
    })

})