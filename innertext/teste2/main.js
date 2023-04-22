const lista = document.querySelector("ul");

function ocultaTintas() {
    lista.classList.add('oculto');
    lista.classList.remove('revelado');
}

function mostraTintas() {
    lista.classList.add('revelado');
    lista.classList.remove('oculto');
}

