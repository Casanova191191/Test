//Para que complete los comandos de Cypress
/// <reference types = "cypress"/>

require('cypress-plugin-tab')

/*describe('Ejemplo funcion tab', () =>{
    //EL nombre de mi prueba
    it("Type con tab", () =>{
       cy.visit('https://demoqa.com/automation-practice-form')
       cy.title().should('eq','DEMOQA')
       cy.wait(1000)

//Para tabular es el .tab()
       cy.get('firstName#').type("Diana").tab().
       type("Casanova").tab().
       type("dianacasanova@gmail.com")
    })

})*/

describe('Primer test en cypress', () =>{
    //EL nombre de mi prueba
    it("Hola mundo desde Cypress", () =>{
        //Lo que quiero que me imprima en consola
        cy.log("Bienvenidos")
        //Le doy el enlace de la pagina que quiero que visite  
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        //Funcion get para decirle que voy a agarrar un elemento de la pagina (para identificar el ID va con #) y el type es lo que quiero escribir en ese campo
        cy.get("#wsf-1-field-21").type("DIANA").tab().
        //cy.wait(1000)
        //Siguente elemento
       type("CASANOVA").tab().
        //Es el tiempo que quiero que espere para la otra orden 
        //cy.wait(1000)
        //Siguente elemento
        type("dianacasanova0q2@gmail.com").tab().
         //Es el tiempo que quiero que espere para la otra orden 
         //cy.wait(1000)
         //Siguente elemento
        type("3145979820").tab().
          //Es el tiempo que quiero que espere para la otra orden 
        //cy.wait(1000)
        //Siguente elemento
        type("Demo de dirección").tab().
           //Es el tiempo que quiero que espere para la otra orden 
        //cy.wait(1000)
           //Siguente elemento. funcion click evento click 
        click()
        //Es el tiempo que quiero que espere para la otra orden 
        cy.wait(3000)
    })
})
