//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

require('cypress-xpath')

describe('Tipos de selectores', () =>{
    //EL nombre de mi prueba
    it("Selector por ID", () =>{
       cy.visit("https://demoqa.com/text-box")
       cy.title('eq','DEMOQA')
       cy.wait(1000)
       cy.get("#userName").should("be.visible").type("Diana")
       cy.get('#userEmail').should("be.visible").type("diana@gmail.com")
    })

    //Selector POR ATRIBUTOS
    it("Selector por atributos", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title('eq','DEMOQA')
        cy.wait(1000)
        cy.get("[placeholder='Full Name']").should("be.visible").type("Diana")
     })


     //Para utilizar este componente se debe instalar en cypres con el comando "npm install -D cypress-xpath" y se debe de poner el require('cypress-xpath') encima del describe
     it("Selector por Xpath", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title('eq','DEMOQA')
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Diana Casanova")
        cy.xpath("//input[contains(@placeholder,'name@example.com')]").should("be.visible").type("algo@gmail.com")
     })


     //Selector por contains
     it("Selector por contains", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title('eq','DEMOQA')
        cy.wait(1000)

        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()

     })


     // Copy Selector- Se selecciona en el navegador (inspeccionar), seleccionar -> copiar ->copiar selector 
     it.only("Selector por contains", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title('eq','DEMOQA')
        cy.wait(1000)

        cy.get("#userNumber").should("be.visible").type("3145679234")

     })

})


