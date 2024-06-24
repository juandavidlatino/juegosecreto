let numeroSecreto = generarNumeroSecreto ();

console.log(numeroSecreto);

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}

function intentoDeUsuario() {
    alert("Click desde el botón");
    return;

}
function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto;
}
asignarTextoElemento("h1", "Juego del numerito secreto");
asignarTextoElemento( "p", "Indica un número del 1 al 100");