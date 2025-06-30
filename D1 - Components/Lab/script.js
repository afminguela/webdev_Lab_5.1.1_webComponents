fetch("movies.json")
  .then((res) => res.json())
  .then((movies) => {
    const container = document.getElementById("movie-container");
    movies.forEach((movie) => {
      container.appendChild(MovieCard(movie));
    });
  });

function MovieCard({ title, year, genre, synopsis }) {
  const card = document.createElement("div");
  card.className = "movie-card";

  card.innerHTML = `
        <h2>${title}</h2>
        <small>${year} - ${genre}</small>
        <p>${synopsis}</p>
    `;

  return card;
}
