# NOVA · Web responsive con Bootstrap

Web de una cafetería de especialidad, maquetada con **Bootstrap 5** y adaptada a móvil, tablet y escritorio. Incluye un carrusel de imágenes hecho con JavaScript, una galería, un formulario de contacto y un mapa interactivo con geolocalización.

Proyecto realizado durante el ciclo de **Técnico Superior en Desarrollo de Aplicaciones Web**.

## Demo en vivo

**https://drfrodorick.github.io/Marcelino_Ramos_trabajoSQL/**

## Funcionalidades

- **Diseño responsive con Bootstrap 5:** sistema de rejilla, tarjetas, utilidades de espaciado y contenido distinto según el tamaño de pantalla (por ejemplo, el carrusel solo se muestra en tablet y escritorio, y en móvil se sustituye por un texto de bienvenida).
- **Carrusel propio en JavaScript**, sin depender del componente de Bootstrap: las imágenes, sus textos alternativos y sus dimensiones se definen en un array.
- **Menú hamburguesa** animado para móvil.
- **Galería** de fotos en rejilla adaptable.
- **Formulario de contacto** maquetado con los componentes de formulario de Bootstrap.
- **Mapa interactivo** con Leaflet y OpenStreetMap: pide la ubicación del usuario y la muestra en el mapa; si no da permiso, muestra una ubicación por defecto.
- **Accesibilidad:** textos alternativos en todas las imágenes y dimensiones declaradas en las fotos para evitar saltos al cargar.

## Tecnologías

- HTML5 y CSS3
- [Bootstrap 5.3](https://getbootstrap.com/)
- JavaScript (ES6+) y API de geolocalización del navegador
- [Leaflet](https://leafletjs.com/) con OpenStreetMap
- Publicado con GitHub Pages

## Estructura

```
├── index.html          # Portada con carrusel y servicios
├── views/              # Galería, contacto y aviso legal
├── css/styles.css      # Estilos propios sobre Bootstrap
├── js/                 # main.js (carrusel), hamburguesa.js (menú), mapa.js (mapa)
└── assets/             # Imágenes y favicon
```

## Ejecutarlo en local

Basta con abrir `index.html` en el navegador. Para que el mapa pueda pedir la ubicación conviene usar un servidor local, por ejemplo la extensión **Live Server** de VS Code.

## Autor

**Marcelino Ramos Martínez** · Desarrollador Web Junior
[GitHub](https://github.com/DrFrodorick) · [LinkedIn](https://www.linkedin.com/in/marcelino-ramos-martinez-0b4178262/)
