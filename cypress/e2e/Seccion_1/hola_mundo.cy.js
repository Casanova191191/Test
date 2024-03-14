/// <reference types = "cypress"/>

describe('Primer test en cypress', () =>{
    //EL nombre de mi prueba
    it("Hola mundo desde Cypress", () =>{
        //Lo que quiero que me imprima en consola
        cy.log("Bienvenidos")
        //Le doy el enlace de la pagina que quiero que visite  
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        //Funcion get para decirle que voy a agarrar un elemento de la pagina (para identificar el ID va con #) y el type es lo que quiero escribir en ese campo
        cy.get("#wsf-1-field-21").type("DIANA")
        cy.wait(1000)
        //Siguente elemento
        cy.get("#wsf-1-field-22").type("CASANOVA")
        //Es el tiempo que quiero que espere para la otra orden 
        cy.wait(1000)
        //Siguente elemento
        cy.get("#wsf-1-field-23").type("dianacasanova0q2@gmail.com")
         //Es el tiempo que quiero que espere para la otra orden 
         cy.wait(1000)
         //Siguente elemento
         cy.get("#wsf-1-field-24").type("3145979820")
          //Es el tiempo que quiero que espere para la otra orden 
        cy.wait(1000)
        //Siguente elemento
        cy.get("#wsf-1-field-28").type("Demo de dirección")
           //Es el tiempo que quiero que espere para la otra orden 
        cy.wait(1000)
           //Siguente elemento. funcion click evento click 
        cy.get("#wsf-1-field-27").click()
        //Es el tiempo que quiero que espere para la otra orden 
        cy.wait(3000)
    })
})