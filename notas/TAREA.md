
# Tarea: Mi componente interactivo

## Componente elegido

Lista de tareas interactivas. Permite registrar tareas con su prioridad, marcarlas como completadas y eliminarlas.

## Código principal

```js
// Clase que representa una tarea
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

// El resto del código está en tarea/app.js
```

## Pruebas realizadas

| Acción | Resultado esperado | Cumple |
|---|---|---|
| Agregar una tarea | Aparece en la lista con su prioridad | Sí |
| Completar una tarea | El texto aparece tachado | Sí |
| Borrar una tarea | Desaparece de la lista | Sí |
| Enviar campos vacíos | El formulario no se envía | Sí |

## Por qué diseñé así mi clase

Elegí los atributos nombre y prioridad porque permiten identificar cada tarea y conocer su importancia. También agregué completada para controlar si ya se terminó. El método descripcion() muestra la información de cada objeto en la página.
