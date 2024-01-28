//* Crear funciones para cada tarea, tambien refactoriza

const contenedorNotas = document.getElementById("contenedor");
const inputNuevaNota = document.getElementsByTagName("textarea")[0];
const botonCrearNota = document.getElementById("crear");

document.addEventListener("DOMContentLoaded", () => {
    let notasGuardadas = JSON.parse(localStorage.getItem("notas")) || [];
    notasGuardadas.forEach(element => crearNota(element));
})

function notaOnClick(e) {
    e.preventDefault();
    crearNota(inputNuevaNota.value);
    inputNuevaNota.value = "";
}

function crearNota(texto) {
    const nuevaNota = document.createElement("div");
    nuevaNota.className = "nota";

    const paragrafoNota = document.createElement("p");
    paragrafoNota.textContent = texto;

    const botonBorrar = document.createElement("button");
    botonBorrar.className = "borrar";
    botonBorrar.textContent = "Borrar";
    botonBorrar.addEventListener("click", eliminarNota);

    nuevaNota.appendChild(paragrafoNota);
    nuevaNota.appendChild(botonBorrar);
    contenedorNotas.appendChild(nuevaNota);
    guardarNotas();
}

function eliminarNota(e) {
    const nota = e.target.parentElement;
    contenedorNotas.removeChild(nota);
    guardarNotas();
}

function guardarNotas() {
    let notasGuardadas = [...document.querySelectorAll(".nota p")];
    notasGuardadas = notasGuardadas.map(n => n.textContent);
    localStorage.setItem("notas", JSON.stringify(notasGuardadas));
}