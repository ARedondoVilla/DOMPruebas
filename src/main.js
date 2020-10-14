require('./style.css')

function onClick() {
    console.log("Has pulsado el boton");
    
}

window.onload = function() {
    let nosequedecir = document.querySelector("#element");
    let ul = document.querySelector(".list");
    let button = nosequedecir.querySelector("button"); 

    button.addEventListener("click", onClick);
}   
