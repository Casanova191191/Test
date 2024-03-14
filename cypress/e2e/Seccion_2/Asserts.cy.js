//Para que complete los comandos de Cypress
/// <reference types = "Cypress"/>

describe('Nueva sección Asserts', () =>{
    //EL nombre de mi prueba
    it(" Assert contains", () =>{
       cy.visit("http://www.automationpractice.pl/index.php")
       cy.title('eq',"My Shop")

       //.contains : Para coger un hijo de la clase padre (Contiene)
       //..........padre....................hijo......................
       cy.get("#block_top_menu").contains("Women").click()    
    })


    it(" Assert find, eq", () =>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title('eq',"My Shop")

        cy.get("#block_top_menu").contains("Women").click()    
        //EL .find es para que me encuentre un elemento dentro del container 
        //El eq es como un arreglo, donde puedo poner la posición 
        cy.get(".product_list").find(".product-container").eq(0).find(".left-block").click()
    })


    it(" Assert find, eq", () =>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title('eq',"My Shop")

        cy.get("#block_top_menu").contains("Women").click()    
        //EL .find es para que me encuentre un elemento dentro del container 
        //El eq es como un arreglo, donde puedo poner la posición 
        cy.get(".product_list").find(".product-container").eq(0).find(".left-block").click()
    })

// empezando a utilizar las condicionales if
    it(" Assert find, eq, validando que sea nuevo", () =>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title('eq',"My Shop")

        cy.get("#block_top_menu").contains("Women").click()    
        //EL .find es para que me encuentre un elemento dentro del container 
        //El eq es como un arreglo, donde puedo poner la posición 
        cy.get(".product_list").find(".product-container").eq(2).find(".left-block").click()

        cy.get("#product_condition .editable").then((e)=>{
            //cy.log(e.text())
            let estado=e.text()
            //cy.log(estado)

            if (estado=="New"){
                cy.log("El vestido está nuevo")
            }
    
        })
        //CUando le pongo en el log el e.text le estoy diciendo que me imprima el texto de elemento seleccionado 
        cy.get("#our_price_display").then((e)=>{
            cy.log(e.text())
            // se crea una variable para el precio 
            // Se va a utilizar la funcion .slice 
            let precio=e.text() //le estoy diciendo que el valor de esa variable es igual al elemento 
            precio=precio.slice(1,3)//El .slide es para quitar un elemento y funciona como un array y las posiciones, dentro del parentesis le doy la posicion de los elementos que quiero coger del texto ej (1,5) del 1 al 5

            cy.log(precio)

            if(precio>30){
                cy.log("el vestido sale de nuestro presupuesto")
                cy.xpath("//*[@id='columns']/div[1]/a[2]").click()
                cy.wait(precio)
            }else{
                cy.log("EL precio se ajusta")
                cy.get("#add_to_cart").click()
                cy.wait(5000)
            }
        })
    })


})
