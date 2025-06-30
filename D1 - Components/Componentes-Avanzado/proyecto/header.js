// header.js
export function createBasicHeader() {
  const header = document.createElement("header");
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

export function loadBasicHeader() {
  const container = document.getElementById("header-container");
  if (container) {
    container.appendChild(createBasicHeader());
  }
}
