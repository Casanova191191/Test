//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

require('cypress-xpath')

describe('Nueva sección checbox', () =>{
    //EL nombre de mi prueba
    it.only(" Check uno ", () =>{
       cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
       cy.title('eq',"Prueba de campos Checkbox | TestingQaRvn")
       cy.wait(1000)

       //Para dar clic al ckeck se puede utilizar la funcion .click() o .check()
       cy.get("[type='checkbox']").check().should("be.checked")
       cy.wait(1500)
       //Para que no los chequee
       cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    })

    it(" Check por selección ", () =>{
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title('eq',"Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1000)

        cy.xpath("//label[contains(@id,'wsf-1-label-36-row-3')]").click()
     })

     // PARA RADIO BUTTONS
    it(" Check por selección ", () =>{
        cy.visit("https://testingqarvn.com.es/radio-buttons/")
        cy.title('eq',"Radio Buttons | TestingQaRvn")
        cy.wait(1000)

        cy.get('#wsf-1-label-44-row-2').click()
        
     })

})


