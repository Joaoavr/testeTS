let numeric = document.getElementById("numero")
let numero = 0;

function  increment() {
    numero = numero + 1;
    numeric.innerHTML= numero;
}

function  decrement() {
    numero = numero - 1;
    numeric.innerHTML= numero;
}
