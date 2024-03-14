//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

describe('Nueva sección checbox', () =>{
    //EL nombre de mi prueba
    it(" Select uno, lista fija de opciones", () =>{
       cy.visit("https://testingqarvn.com.es/combobox/")
       cy.title('eq',"ComboBox | TestingQaRvn")
       cy.wait(1000)

       cy.get("#wsf-1-field-53").should("be.visible").select("Mac").should("have.value","Mac")
    })


    it.only(" Select dos, lista de opciones a azar", () =>{
        cy.visit("https://www.google.com/?hl=es")
        cy.title('eq',"Google")
        cy.wait(1000)
 //Para buscar esa palabra y dar clic
       cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
       cy.wait(1000)
       cy.get('.MUFPAc > :nth-child(2) > a').click()
     })

    
     it(" Select tres, elegir varios elementos de una lista", () =>{
        cy.visit("https://material.angular.io/components/select/overview")
        cy.title('eq',"Select | Angular Material")
        cy.wait(1000)
 // Para seleccionar varios elementos de una lista se utiliza ago como .select(["Extra cheese","Pepperoni","Tomato"])
 //Pequeño inicio de promesas con el .then(()=>{ Aqui dentro va la condicional o la funcion })
        cy.get('select-custom-trigger-example.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').should("be.visible").select(["Extra cheese","Pepperoni","Tomato"]).then(()=>{
            cy.get("").should("be.visible").click()
        })
 
     })


})
