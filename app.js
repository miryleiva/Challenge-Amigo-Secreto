// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaramos un array para almacenar los nombres de mis amigos
let amigos = [];


function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); 

    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya se encuentra añadido.");
        return;
    }  
    amigos.push(nombre);

    input.value = "";

    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Añade al menos uno.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li> TA TAAAN El amigo secreto afortunado es: <strong>${amigoSorteado}</strong> Yayyyy </li>`;
}