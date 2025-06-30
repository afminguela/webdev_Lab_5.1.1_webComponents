# 💡 Lab 3: Gestor de Películas (Complejo)

## Enunciado
Crea un componente llamado `MovieCard` que lea los datos desde un archivo `movies.json` y genere una tarjeta por cada película. Cada tarjeta debe mostrar:
- Título
- Año
- Género
- Sinopsis

Además:
- Toda la carga debe hacerse dinámicamente desde el JSON.
- El diseño debe estar encapsulado por componente (JS + CSS). (Es decir, que el componente JS inyecte una clase y que dicha clase sólo afecte a este componente. O bien, que el JS inyecte el estilo directamente, esto es menos recomendable).
- Los componentes deben insertarse dinámicamente en un contenedor principal.

## Solución

### 📁 index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Movie Cards</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="movie-container"></div>
  <script src="movieCard.js"></script>
</body>
</html>
```

### 📁 styles.css
```
.movie-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 12px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  max-width: 300px;
}
.movie-card h2 {
  margin: 0;
}
.movie-card small {
  color: #555;
}
```

### 📁 movieCard.js
```
fetch('movies.json')
  .then(res => res.json())
  .then(movies => {
    const container = document.getElementById("movie-container");
    movies.forEach(movie => {
      container.appendChild(MovieCard(movie));
    });
  });

function MovieCard({ title, year, genre, synopsis }) {
  const card = document.createElement("div");
  card.className = "movie-card";

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const meta = document.createElement("small");
  meta.textContent = `${year} | ${genre}`;

  const desc = document.createElement("p");
  desc.textContent = synopsis;

  card.appendChild(h2);
  card.appendChild(meta);
  card.appendChild(desc);

  return card;
}
```