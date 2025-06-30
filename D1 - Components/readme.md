# 🧩 Introducción a los Web Components

Este documento está pensado como una **guía de introducción práctica** al uso de **Web Components** y la plataforma [https://www.webcomponents.org](https://www.webcomponents.org/), enfocado a estudiantes de JavaScript que ya han trabajado con clases, modularización y componentes básicos.

---

## ✅ ¿Qué es un componente?

Un **componente** en programación frontend es una **pieza reutilizable de interfaz**: contiene estructura (HTML), estilo (CSS) y lógica (JS), todo encapsulado en una unidad.

Por ejemplo:
- Un botón con comportamiento personalizado
- Una tarjeta de usuario con avatar, nombre y biografía
- Un cuadro de alerta interactivo

En frameworks como React o Vue, usamos JSX o templates.  
Pero **los Web Components** son la **versión nativa del navegador**: sin frameworks, sin dependencias.

---

## 🌐 ¿Qué es WebComponents.org?

[WebComponents.org](https://www.webcomponents.org/) es un portal comunitario que **reúne y documenta** componentes personalizados compatibles con navegadores modernos. Allí puedes:

- Buscar componentes ya hechos (botones, sliders, menús…)
- Ver ejemplos de uso
- Consultar la documentación y eventos
- Integrarlos fácilmente en tus propios proyectos

---

## 🛠️ ¿Cómo usar un Web Component?

### Paso 1: Visita la web

👉 Abre: [https://www.webcomponents.org](https://www.webcomponents.org)

Puedes navegar por categorías o usar la barra de búsqueda.

### Paso 2: Elige un componente

Por ejemplo, busca **`simple-tooltip`**  
(tooltip que aparece al pasar el ratón sobre un elemento)

👉 Enlace directo: https://www.webcomponents.org/element/@lrnwebcomponents/simple-tooltip

### Paso 3: Copia el script de importación

La mayoría de componentes tienen una línea como esta:

```html
<script type="module" src="https://unpkg.com/@github/xyz@x.x.x/dist/xyz.js"></script>
```

Pega esto en el `<head>` de tu HTML.

### Paso 4: Usa el componente como etiqueta HTML

Por ejemplo:

```html
<simple-tooltip label="Esto es un tooltip">
  <button>Pasar el ratón</button>
</simple-tooltip>
```

✅ ¡Ya está funcionando sin necesidad de instalar nada localmente!

---

## 💡 ¿Qué ventajas tienen los Web Components?

- **Nativos**: no necesitas React, Vue ni Angular
- **Encapsulados**: su CSS y JS no afectan al resto
- **Reutilizables**: puedes copiar/pegar en cualquier proyecto
- **Portables**: funcionan en cualquier navegador moderno

---

## ⚠️ Requisitos mínimos

- `<script type="module">` debe estar habilitado
- Usa siempre HTTPS en las URLs de los componentes
- Asegúrate de que el componente es compatible con tu navegador (la mayoría ya lo son)

---

## 🧪 ¿Y si quiero crear uno yo?

Esto sería el siguiente nivel. Un componente básico se crea así:

```js
class MiComponente extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<p>Hola desde mi Web Component</p>";
  }
}
customElements.define('mi-componente', MiComponente);
```

Y lo usarías en HTML como:

```html
<mi-componente></mi-componente>
```

---

## 🎯 Consejos finales

- Usa [webcomponents.org](https://www.webcomponents.org) como si fuera una tienda de piezas
- Antes de programar algo complejo, **mira si ya existe**
- Ideal para proyectos sin framework o pruebas rápidas

---

¡Ahora puedes integrar componentes nativos, modernos y reutilizables como un profesional!