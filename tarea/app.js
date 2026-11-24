
// Clase propia para representar una tarea
class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
    this.completada = false;
  }

  descripcion() {
    return this.nombre + " - Prioridad: " + this.prioridad;
  }
}

const formulario = document.querySelector("#formulario");
const nombreTarea = document.querySelector("#nombreTarea");
const prioridad = document.querySelector("#prioridad");
const listaTareas = document.querySelector("#listaTareas");
const mensaje = document.querySelector("#mensaje");

const tareas = [];

function mostrarTarea(tarea) {
  const li = document.createElement("li");
  const texto = document.createElement("span");
  const btnCompletar = document.createElement("button");
  const btnBorrar = document.createElement("button");

  texto.textContent = tarea.descripcion();
  btnCompletar.textContent = "Completar";
  btnBorrar.textContent = "Borrar";

  btnCompletar.addEventListener("click", () => {
    tarea.completada = !tarea.completada;
    texto.classList.toggle("completada", tarea.completada);
    btnCompletar.textContent =
      tarea.completada ? "Desmarcar" : "Completar";
  });

  btnBorrar.addEventListener("click", () => {
    const indice = tareas.indexOf(tarea);
    if (indice !== -1) {
      tareas.splice(indice, 1);
    }
    li.remove();
    mensaje.textContent = "Tarea eliminada.";
  });

  li.appendChild(texto);
  li.appendChild(document.createElement("br"));
  li.appendChild(btnCompletar);
  li.appendChild(btnBorrar);

  listaTareas.appendChild(li);
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = nombreTarea.value.trim();
  const nivel = prioridad.value.trim();

  if (nombre === "" || nivel === "") {
    mensaje.textContent = "Completa todos los campos.";
    mensaje.classList.add("error");
    return;
  }

  const nuevaTarea = new Tarea(nombre, nivel);
  tareas.push(nuevaTarea);
  mostrarTarea(nuevaTarea);

  mensaje.textContent = "Tarea agregada correctamente.";
  mensaje.classList.remove("error");
  formulario.reset();
});
