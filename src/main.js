require('./style.css')

function onClick() {
    console.log("Has pulsado el boton");
    
}

function porPantalla() {
    let lista = document.querySelector("#element .list");
    let li = document.createElement("li");
    let text = document.createTextNode("Has pulsado el boton");

    li.appendChild(text);
    lista.appendChild(li);
    console.log("Click");
    

}

window.onload = function() {
    let nosequedecir = document.querySelector("#element");
    let ul = document.querySelector(".list");
    let button = nosequedecir.querySelector("button"); 

    button.addEventListener("click", porPantalla);
}   
