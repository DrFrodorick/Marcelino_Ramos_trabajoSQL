document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".barNav-links");

    // Abrir / cerrar menú
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        menuBtn.classList.toggle("open"); // activa animación X
    });

    // Cerrar menú al pulsar un enlace
    navLinks.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuBtn.classList.remove("open");
        });
    });

    // Cerrar menú si se hace clic fuera
    document.addEventListener("click", (e) => {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove("show");
            menuBtn.classList.remove("open");
        }
    });

});
