# 💡 Lab 2: Componente con datos (Simple)

## Enunciado
Crea un componente llamado `UserCard` que reciba los siguientes datos:
- `name` (string)
- `email` (string)

El componente debe renderizar un bloque con:
- Nombre del usuario en un `<h3>`
- Email del usuario en un `<p>`

Se debe mostrar **al menos dos tarjetas distintas** pasando los datos manualmente.

Aplícale algunos estilos, como borders, padding, margin, borderRadius, boxShadow, background-color o lo que se te ocurra. 

Para ello, crea una función que se llame UserCard, la función debe recibir un objeto con los atributos "name" e "email". Luego usa dicha función para cargar el contenido en la web. 

Nuevamente, no hace falta implementar navegación por la web. 

---
---
---
---
---
---
---
---
---
---
---


## Solución

### 📁 index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>User Cards</title>
</head>
<body>
  <div id="app"></div>
  <script src="userCard.js"></script>
</body>
</html>
```

### 📁 userCard.js
```js
function UserCard({ name, email }) {
  const card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.padding = "16px";
  card.style.margin = "10px";
  card.style.borderRadius = "8px";
  card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

  const title = document.createElement("h3");
  title.textContent = name;

  const mail = document.createElement("p");
  mail.textContent = email;

  card.appendChild(title);
  card.appendChild(mail);

  return card;
}

const app = document.getElementById("app");
app.appendChild(UserCard({ name: "Juan Pérez", email: "juan@mail.com" }));
app.appendChild(UserCard({ name: "Ana García", email: "ana@mail.com" }));
```