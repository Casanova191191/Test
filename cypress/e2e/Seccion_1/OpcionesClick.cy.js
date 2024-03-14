//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

describe(' Opciones de click ', () =>{
    //EL nombre de mi prueba
    it(" clic sencillo ", () =>{
        //Le doy el enlace de la pagina que quiero que visite  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Le pido que me valide si el título de la página es igual
        cy.title().should('eq','OrangeHRM')
        // tiempo de espera para el siguiente paso 
        cy.wait(1000)
        //el be.visible espara que me valide si el campo sea visible 
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.wait(1000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        cy.wait(1000)
        //finción clic
        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
    })

    it(" clic forse true ", () =>{
        //clic forzado
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.wait(1000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        cy.wait(1000)
        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click({force: true})
    })

   // el .only es para que solo corra esa parte del código
    it.only(" clic por coordenadas (x,y)", () =>{
         //clic por coordenadas 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.wait(1000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        cy.wait(1000)
        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(1000)
        cy.get(':nth-child(8) > .oxd-main-menu-item').should("be.visible").click(50,6)
        //cy.get(':nth-child(8) > .oxd-main-menu-item').should("be.visible").click(15,75)

        //cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click({force: true})
    })
})


