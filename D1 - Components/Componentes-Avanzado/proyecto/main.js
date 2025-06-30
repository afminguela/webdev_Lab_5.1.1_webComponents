// main.js -> Es el nombre que recibe el archivo de código principal. Es un nombre por convenio.
import { loadBasicHeader } from "./header.js";
// Si quieres usar el de películas en vez del simple:
import { loadMovieHeader } from "./header-films.js";

document.addEventListener("DOMContentLoaded", () => {
  loadBasicHeader(); // o loadMovieHeader();
});
