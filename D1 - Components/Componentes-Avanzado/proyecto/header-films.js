// header-films.js
export function createMovieHeader(title, year, movies, user) {
  const header = document.createElement("header");
  header.innerHTML = `
    <h1>${title} - ${year}</h1>
    <p>Usuario: ${user.name} (${user.age} años)</p>
    <nav>
      <ul>
        ${movies.map((movie) => `<li>${movie}</li>`).join("")}
      </ul>
    </nav>
  `;
  return header;
}

export function loadMovieHeader() {
  const container = document.getElementById("header-container");
  if (!container) return;

  const title = "Mis Películas";
  const year = 2025;
  const movies = [
    "Inception",
    "Interstellar",
    "Dune",
    "El señor de los anillos",
  ];
  const user = { name: "Juan", age: 30 };

  container.appendChild(createMovieHeader(title, year, movies, user));
}
