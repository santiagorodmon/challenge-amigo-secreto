// El principal objetilet vo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigos(){
    const input = document.getElementById('amigo');
    const nombre = input.value

    if(nombre != ""){
        amigos.push(nombre);
        console.log(amigos);
        limpiarCaja();
        mostrarAmigos();
    } else {
        alert('Por favor, inserte un nombre.');
    }    
}


function limpiarCaja(){
    document.querySelector('#amigo').value = '';
} 


function mostrarAmigos() {
    //Busca en el html el id listaAmigos y borramos el contenido de variable lista
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    //recorrer arreglo amigos y por cada item se crea un <li> y se le asigna el contenido de amigos[i] 
    //y se agrega al elemnto <li> de html con el id listaAmigos
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

