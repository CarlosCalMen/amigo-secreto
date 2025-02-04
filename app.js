// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

const agregarAmigo = ()=>{ 
    let amigo = document.getElementById('amigo').value; 
    if (amigo!=''){
        document.getElementById('amigo').value='';
        amigos.push(amigo);
        console.log(amigos);
        actualizarListaAmigos();
    }    
    else {
        alert('Error debe ingresar un nombre de amigo');
        return;
    };
};

const actualizarListaAmigos = ()=>{
    let listaAmigos= document.getElementById('listaAmigos');
    listaAmigos.innerHTML='';
    for (let i=0; i<amigos.length;i++) {  
        let elementoLista = document.createElement('li');
        elementoLista.innerHTML =amigos[i];
        elementoLista.setAttribute('id',i); 
        listaAmigos.appendChild(elementoLista);
    };    
    return;
};


