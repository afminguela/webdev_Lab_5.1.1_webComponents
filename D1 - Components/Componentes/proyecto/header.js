// Componente Header completo (JS + CSS en un solo archivo)

class Header {
  constructor({ title = 'Mi Web', links = [] } = {}) {
    this.title = title;
    this.links = links;
  }

  injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: #0d47a1;
        color: white;
        font-family: sans-serif;
      }
      .header__logo {
        margin: 0;
        font-size: 1.5rem;
      }
      .header__nav {
        list-style: none;
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
      }
      .header__link {
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
      .header__link:hover {
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);
  }

  render() {
    const container = document.createElement('header');
    container.classList.add('header');

    const logo = document.createElement('h1');
    logo.classList.add('header__logo');
    logo.textContent = this.title;

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('header__nav');

    this.links.forEach(({ label, href }) => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      li.classList.add('header__item');
      a.classList.add('header__link');

      a.href = href;
      a.textContent = label;

      li.appendChild(a);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    container.appendChild(logo);
    container.appendChild(nav);

    return container;
  }

  mount(targetId = 'header') {
    const mountPoint = document.getElementById(targetId);
    if (!mountPoint) {
      console.error(`❌ No se encontró el elemento con id="${targetId}"`);
      return;
    }

    this.injectStyles(); // Añade estilos al head
    mountPoint.innerHTML = ''; // Limpia el contenido anterior
    mountPoint.appendChild(this.render());
  }
}

// 🔽 Ejecución automática
new Header({
  title: 'JS Pro Academy',
  links: [
    { label: 'Inicio', href: '#' },
    { label: 'Temario', href: '#temario' },
    { label: 'Contacto', href: '#contacto' },
  ]
}).mount('header');
