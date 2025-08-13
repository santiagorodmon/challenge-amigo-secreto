// El principal objetilet vo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigos(){
    const input = document.getElementById('amigo');
    const nombre = input.value

    if(nombre != ""){
        amigos.push(nombre);
        console.log("Lista de amigos:", amigos);
        limpiarCaja();
    } else {
        alert('Por favor, inserte un nombre.');
    }    
}


function limpiarCaja(){
    document.querySelector('#amigo').value = '';
} 