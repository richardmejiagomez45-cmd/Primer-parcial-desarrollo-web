#  Proyecto Web - Concesionario de Vehículos

## Descripción

Este proyecto consiste en el desarrollo de una página web para un concesionario de vehículos. Permite visualizar vehículos disponibles, navegar entre secciones mediante un sidebar, y reutilizar componentes como header y footer en múltiples páginas.

El objetivo principal fue aplicar conceptos de desarrollo web moderno como modularización, uso de datos dinámicos y trabajo colaborativo con GitHub.

---

##  Fragmentos, Plantillas y Web Components

### Fragmentos (HTML dinámico con fetch)

Los fragmentos son archivos HTML reutilizables que se cargan dinámicamente en diferentes páginas.

En este proyecto se utilizaron para:

* Header (`header.html`)
* Sidebar (`sidebar.html`)
* Footer (`footer.html`)

Se implementaron utilizando `fetch` en JavaScript:

```js
fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });
```

Esto permite:

* Evitar repetir código en múltiples páginas
* Facilitar el mantenimiento
* Mantener una estructura más limpia y organizada

---

###  Plantillas (Templates)

Las plantillas permiten generar contenido dinámico a partir de datos.

En este proyecto se usan para mostrar los vehículos desde un archivo JSON, creando tarjetas dinámicamente con JavaScript.

Ejemplo:

```js
fetch("data/vehiculos.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("cars");

    data.forEach(car => {
      const card = document.createElement("div");
      card.classList.add("car-card");

      card.innerHTML = `
        <h3>${car.nombre}</h3>
        <p>${car.descripcion}</p>
        <h4>${car.precio}</h4>
      `;

      container.appendChild(card);
    });
  });
```

Esto permite:

* Mostrar contenido dinámico
* Separar datos (JSON) de la vista (HTML)
* Facilitar futuras modificaciones

---

###  Web Components

Los Web Components son elementos personalizados de HTML que permiten encapsular estructura, estilo y comportamiento.

En este proyecto no se implementaron como clases (`class extends HTMLElement`), pero el uso de fragmentos cumple una función similar al permitir reutilización y modularidad.

---

##  Implementación del Login

Se desarrolló un formulario de inicio de sesión básico utilizando HTML, CSS y JavaScript.

### Características:

* Campos de usuario y contraseña
* Validación con JavaScript
* Redirección a la página principal

Ejemplo:

```js
const user = document.getElementById("user").value;
const pass = document.getElementById("pass").value;

if (user === "admin" && pass === "1234") {
  window.location.href = "index.html";
} else {
  alert("Datos incorrectos");
}
```

Este sistema es solo una simulación (no usa base de datos ni backend).

---

##  Buenas prácticas aplicadas

* ✔ Separación de responsabilidades (HTML, CSS, JS)
* ✔ Uso de componentes reutilizables
* ✔ Organización por carpetas (`components`, `data`, etc.)
* ✔ Uso de `fetch` para carga dinámica
* ✔ Uso de `addEventListener` en lugar de eventos inline
* ✔ Código limpio y legible
* ✔ Diseño responsive con media queries
* ✔ Uso de nombres de clases claros y consistentes

---

##  Trabajo colaborativo en GitHub

El proyecto fue desarrollado utilizando control de versiones con Git y GitHub.

### Estrategia utilizada:

* Rama `main`: versión final y estable
* Rama individual para cada integrante

### Flujo de trabajo:

1. Cada integrante trabajó en su propia rama
2. Se realizaron commits frecuentes
3. Se hicieron merges hacia `main`

Esto permitió:

* Evitar conflictos
* Trabajar en paralelo
* Mantener un historial claro de cambios

---

##  Evidencia de colaboración

En el repositorio de GitHub se puede evidenciar:

* Historial de commits de cada integrante
* Cambios realizados en diferentes ramas
* Integración del proyecto mediante merges

---

##  Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

---

##  Conclusión

Este proyecto permitió aplicar conceptos fundamentales del desarrollo web como la reutilización de componentes, manejo de datos dinámicos y trabajo colaborativo.

Además, se implementaron buenas prácticas que facilitan la escalabilidad, mantenimiento y organización del código.
