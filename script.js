//* Crear funciones para cada tarea, tambien refactoriza

const contenedorNotas = document.getElementById("contenedor");

const inputNuevaNota = document.getElementsByTagName("textarea")[0];

const botonCrearNota = document.getElementById("crear");

function crearNota(e) {
    e.preventDefault();

    const nuevaNota = document.createElement("div");
    nuevaNota.className = "nota";

    const paragrafoNota = document.createElement("p");
    paragrafoNota.textContent = inputNuevaNota.value;

    const botonBorrar = document.createElement("button");
    botonBorrar.className = "borrar";
    botonBorrar.textContent = "Borrar";

    nuevaNota.appendChild(paragrafoNota);
    nuevaNota.appendChild(botonBorrar);

    contenedorNotas.appendChild(nuevaNota);
}