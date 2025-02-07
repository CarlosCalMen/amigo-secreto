// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos ingresados
const amigos = [];

/**
 * Función que agrega un amigo a la lista.
 * Obtiene el valor del campo de entrada, lo guarda en el array y actualiza la lista en pantalla.
 */
const agregarAmigo = () => { 
    let amigo = document.getElementById('amigo').value; // Obtiene el nombre del input

    if (amigo !== '') { // Verifica que el campo no esté vacío
        document.getElementById('amigo').value = ''; // Limpia el campo de entrada
        amigos.push(amigo); // Agrega el amigo al array
        console.log(amigos); // Muestra en consola la lista actualizada
        actualizarListaAmigos(); // Actualiza la visualización de la lista en pantalla
    } else {
        alert('Error: Debe ingresar un nombre de amigo'); // Muestra una alerta si el campo está vacío
        return;
    }
};

/**
 * Función que actualiza la lista de amigos en la interfaz.
 * Limpia la lista y la vuelve a construir con los elementos almacenados en el array `amigos`.
 */
const actualizarListaAmigos = () => {
    let listaAmigos = document.getElementById('listaAmigos'); // Obtiene el elemento HTML de la lista
    let resultado = document.getElementById('resultado'); // Obtiene el contenedor de resultados

    resultado.innerHTML = ''; // Limpia el mensaje de resultado previo
    listaAmigos.innerHTML = ''; // Limpia la lista antes de actualizarla
    listaAmigos.style.display = "block"; // Asegura que la lista sea visible

    // Recorre el array `amigos` y crea un elemento <li> para cada nombre
    for (let i = 0; i < amigos.length; i++) {  
        let elementoLista = document.createElement('li'); // Crea un nuevo elemento <li>
        elementoLista.innerHTML = amigos[i]; // Asigna el nombre del amigo
        elementoLista.setAttribute('id', i); // Asigna un ID único basado en la posición
        listaAmigos.appendChild(elementoLista); // Agrega el elemento a la lista en el HTML
    }
};

/**
 * Función que selecciona aleatoriamente un amigo de la lista y lo muestra en pantalla.
 * Luego oculta la lista de amigos.
 */
const sortearAmigo = () => {
    let posicion = -1; // Variable para almacenar la posición del amigo sorteado
    let listaAmigos = document.getElementById('listaAmigos'); // Obtiene la lista de amigos en el HTML
    let resultado = document.getElementById('resultado'); // Obtiene el contenedor de resultados

    if (amigos.length > 0) { // Verifica que haya al menos un amigo en la lista
        posicion = Math.floor(Math.random() * amigos.length); // Genera una posición aleatoria dentro del array
        listaAmigos.style.display = 'none'; // Oculta la lista de amigos
        resultado.innerHTML = `El amigo sorteado es ${amigos[posicion]}`; // Muestra el amigo sorteado en pantalla
    }
};
