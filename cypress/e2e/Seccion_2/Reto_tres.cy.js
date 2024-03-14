//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

describe('Nueva sección checbox', () =>{
    //EL nombre de mi prueba
    it(" Reto de selects", () =>{
       cy.visit("https://testingqarvn.com.es/combobox/")
       cy.title('eq',"ComboBox | TestingQaRvn")
       cy.wait(1000)
//Primero pasa los seleccionados
//.them es una promesa, algo asi como un condicional; si cumple haz lo siguiente 
       cy.get(".pickData").select(["Diana","Emanuel","Teo"]).then(()=>{
        cy.get("").should("be.visible").click().then(()=>{
            cy.wait(2000)
            cy.get("").click().then(()=>{
                cy.get("").click().then(()=>{
                    cy.log("Se movio todo")
                })
            })
        })
       })

      
    })



})
