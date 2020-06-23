"use strict";

//---------------Accedo al botón y contenedor creados---------------------:
var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var posts = null; //aki almacenaré los posts cuando lleguen.

//-----------------------Evento click que obtiene la data------------------:
boton.addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {
        posts = data;
        mostrarDatos(posts)
    })
});

//-----------------------Evento que crea y muestra el contenido--------------:

function mostrarDatos(posts) {
    posts.map((elem, i) => {
        let titulo = document.createElement('h2');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + elem.title;
        contenido.innerHTML = elem.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    }

    )
}