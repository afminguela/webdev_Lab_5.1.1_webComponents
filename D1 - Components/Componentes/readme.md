### Creando Componentes en Vanilla JS

En este documento aprenderemos a crear componentes reutilizables en Vanilla JavaScript. Como ejemplo, implementaremos un **Header** que podremos incluir en varias páginas HTML.

---

## 1. Estructura del Proyecto

Organizaremos nuestro código en los siguientes archivos:

```
/proyecto
  ├── index.html
  ├── about.html
  ├── header.js
  └── styles.css
```

---

## 2. Creación del Componente `Header`

Vamos a crear un archivo `header.js`, donde definiremos el componente como una función que inyecta el código HTML dentro de los documentos que lo necesiten.

```
// header.js
function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="about.html">Acerca</a></li>
            </ul>
        </nav>
    `;

    return header;
}

function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.appendChild(createHeader());
    }
}

// Asegurar que el header se carga cuando el DOM está listo
document.addEventListener('DOMContentLoaded', loadHeader);
```

---

## 3. Implementación en HTML

En cada página HTML donde queramos incluir el **Header**, agregaremos un contenedor con `id="header-container"` y enlazaremos `header.js`.

### **index.html**

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <link rel="stylesheet" href="styles.css">
    <script src="header.js" defer></script>
</head>
<body>
    <div id="header-container"></div>
    <main>
        <h1>Página de Inicio</h1>
    </main>
</body>
</html>
```

### **about.html**

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acerca</title>
    <link rel="stylesheet" href="styles.css">
    <script src="header.js" defer></script>
</head>
<body>
    <div id="header-container"></div>
    <main>
        <h1>Acerca de Nosotros</h1>
    </main>
</body>
</html>
```

---

## 4. Estilos CSS

Añadimos un archivo `styles.css` para estilizar el **Header** y la navegación.

```
/* styles.css */
header {
    background-color: #333;
    padding: 10px 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

nav ul li a:hover {
    text-decoration: underline;
}
```

---