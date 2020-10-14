require('./style.css')

window.onload = function() {
    
    // console.log('Hello world')

    let caja = document.querySelector(".container");
    let texto = document.querySelector(".header");
    texto.style.background = "red";
/*
    let caja = document.querySelector(".container .header");  FORMA SIMPLIFICADA 
    caja.style.background = "red";
*/

    let busca = document.querySelector(".container .header");
    let pepe = busca.querySelector("#pepe");
    pepe.style.background = "green";
    // pepe.innerHTML = "hola don pepito"; // MODIFICA LO QUE HAY DENTRO DE LA ETIQUETA, SUSTITUYE EL VALOR EN EL index.html
   /* 
    let text = document.createTextNode("hola don pepito"); // CREA EL TEXTO TRAS LA ULTIMA ETIQUETA, SI QUE ESTE DENTRO DE NINGUNA ETIQUETA
    busca.appendChild(text);
    */  

    // pepe.innerHTML = "<p>hola don pepito</p>"; // PUEDE INCORPORAR ETIQUETAS html

    let text = document.createTextNode("hola don pepito");
    let h1 = document.createElement("h1");

    h1.appendChild(text);
    busca.appendChild(h1);
}
