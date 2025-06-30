# 💡 Lab 1: Footer Component (Muy Simple)

## Enunciado
Crea un componente en JS que renderice un **footer** con el siguiente contenido:
- Un texto fijo: `"© 2025 Mi Sitio Web"`  
El componente debe insertarse dentro del `<body>`.

Importante, en este caso no hace falta que navegues por la web. Símplemente comprueba que sabes crear y cargar un componente dentro de un index.html :) 

## Solución

### 📁 index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Footer Component</title>
</head>
<body>
  <script src="footer.js"></script>
</body>
</html>
```

### 📁 footer.js
```
// Create the footer element
const footer = document.createElement("footer");
footer.textContent = "© 2025 Mi Sitio Web";
footer.style.textAlign = "center";
footer.style.padding = "20px";
footer.style.backgroundColor = "#f1f1f1";

// Append to body
document.body.appendChild(footer);
```