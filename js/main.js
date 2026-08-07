document.addEventListener("DOMContentLoaded", () => {

    // Selecciona todos los contenedores de carrusel
    const carruseles = document.querySelectorAll(".div-int-1");

    // Recorre cada carrusel encontrado
    carruseles.forEach(div => {

        // Obtiene el id del carrusel desde data-carousel (ej: "carrusel1")
        const id = div.dataset.carousel;

        // Selecciona la imagen principal del carrusel
        const imagen = div.querySelector("#hero-img");

        // Define los datos de cada imagen del carrusel:
        // ruta, texto alternativo y dimensiones reales
        const imagenes = [
            {
                url: `assets/imagenes/carrusel/${id}_1.jpg`,
                alt: "Café artesanal recién servido con pasteles",
                width: 4160,
                height: 5536
            },
            {
                url: `assets/imagenes/carrusel/${id}_2.jpg`,
                alt: "Semillas de café verdes en la rama",
                width: 4000,
                height: 6000
            },
            {
                url: `assets/imagenes/carrusel/${id}_3.jpg`,
                alt: "Foto cenital de un brunch con fruta",
                width: 2268,
                height: 4032
            },
            {
                url: `assets/imagenes/carrusel/${id}_4.jpg`,
                alt: "Café molido sobre filtro de cafeteras",
                width: 2496,
                height: 3744
            },
            {
                url: `assets/imagenes/carrusel/${id}_5.jpg`,
                alt: "Mano sosteniendo semillas de café debajo de un chorro de agua",
                width: 3360,
                height: 5040
            }
        ];

        // Índice actual de la imagen mostrada
        let index = 0;

        // Referencia al intervalo del carrusel automático
        let intervalo = null;

        // Aplica los datos de una imagen concreta al <img> del carrusel
        function aplicarImagen(i) {
            imagen.src = imagenes[i].url;
            imagen.alt = imagenes[i].alt;
            imagen.width = imagenes[i].width;
            imagen.height = imagenes[i].height;
        }

        // Cambia a la siguiente imagen (modo automático)
        function cambiarImagen() {
            index = (index + 1) % imagenes.length;
            aplicarImagen(index);
        }

        // Cambia de imagen según la dirección (prev/next)
        function cambiarImagenManual(direccion) {
            index = (index + direccion + imagenes.length) % imagenes.length;
            aplicarImagen(index);
        }

        // Inicia el carrusel automático al entrar con el ratón
        div.addEventListener("mouseenter", () => {
            intervalo = setInterval(cambiarImagen, 3000); // cada 3 segundos
        });

        // Detiene el carrusel automático al salir con el ratón
        // y vuelve a la primera imagen
        div.addEventListener("mouseleave", () => {
            clearInterval(intervalo);
            intervalo = null;
            index = 0;
            aplicarImagen(index);
        });

        // Selecciona los botones de navegación manual
        const btnPrev = div.querySelector(".prev-btn");
        const btnNext = div.querySelector(".next-btn");

        // Botón anterior: retrocede una imagen
        btnPrev.addEventListener("click", () => cambiarImagenManual(-1));

        // Botón siguiente: avanza una imagen
        btnNext.addEventListener("click", () => cambiarImagenManual(1));

    });

});
