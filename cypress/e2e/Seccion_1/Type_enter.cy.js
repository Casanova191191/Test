//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

describe(' Funciones para type ', () =>{
    //EL nombre de mi prueba
    it(" Type --> ENTER ", () =>{
       cy.visit("https://www.google.com/")
       cy.title().should('eq','Google')
       cy.wait(1500)
       // Le estoy diciendo que busque ese selector/componente y ponga el texto 
       // Creando la función ENTER 
       //opcion 1, signo 
       cy.get("[name='q']").type("cypress io {enter}" )
       cy.wait(1000)
       //función clic 
       cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()
  

       //opcion 2
       //cy.get("#APjFqb").type("cypress io")

       
       
    })

})


