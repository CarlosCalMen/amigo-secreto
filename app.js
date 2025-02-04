// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

const agregarAmigo = ()=>{ 
    let amigo = document.getElementById('amigo').value; 
    if (amigo!=''){
        document.getElementById('amigo').value='';
        console.log(listaAmigos);
        return listaAmigos.push(amigo);
    }    
    else {
        alert('Error debe ingresar un nombre de amigo');
        return;
    };
};



