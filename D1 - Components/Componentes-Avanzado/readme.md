### Creando Componentes en Vanilla JS con Parámetros

En este documento aprenderemos a crear componentes en Vanilla JavaScript que pueden recibir parámetros dinámicos. Implementaremos un **header-films** que acepte diferentes tipos de datos y los utilice internamente.

---

## 1. Estructura del Proyecto

Organizaremos nuestro código en los siguientes archivos:

```
/proyecto
  ├── index.html
  ├── header-films.js
  ├── styles.css
```

---

## 2. Creación del Componente `header-films`

Vamos a definir una función `createHeader` que reciba distintos parámetros y los use en la generación del HTML dinámico.

```
// header-films.js
function createHeader(title, year, movies, user) {
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>${title} - ${year}</h1>
        <p>Usuario: ${user.name} (${user.age} años)</p>
        <nav>
            <ul>
                ${movies.map(movie => `<li>${movie}</li>`).join('')}
            </ul>
        </nav>
    `;
    return header;
}

function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        const title = "Mis Películas";
        const year = 2025;
        const movies = ["Inception", "Interstellar", "Dune"];
        const user = { name: "Juan", age: 30 };

        headerContainer.appendChild(createHeader(title, year, movies, user));
    }
}

// Asegurar que el header-films se carga cuando el DOM está listo
document.addEventListener('DOMContentLoaded', loadHeader);
```

---

## 3. Implementación en HTML

Para incluir el **header-films**, agregamos un contenedor con `id="header-films-container"` en nuestro `index.html`.

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Componentes Dinámicos</title>
    <link rel="stylesheet" href="styles.css">
    <script src="header-films.js" defer></script>
</head>
<body>
    <div id="header-films-container"></div>
    <main>
        <h1>Contenido Principal</h1>
    </main>
</body>
</html>
```

---

## 4. Estilos CSS

Añadimos un archivo `styles.css` para estilizar el **header-films**.

```
/* styles.css */
header {
    background-color: #222;
    color: white;
    padding: 15px;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 10px 0 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 10px;
    background: #444;
    padding: 5px 10px;
    border-radius: 5px;
}

nav ul li:hover {
    background: #666;
}
```

---