document.addEventListener("DOMContentLoaded", () => {

    // Ubicación de MasterD Oviedo (fallback)
    const masterD = [43.367261322318285, -5.841788276454123];

    // Crear mapa centrado en MasterD Oviedo
    const map = L.map('map').setView(masterD, 14);

    // Cargar tiles gratuitos de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Intentar obtener ubicación del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const userPos = [pos.coords.latitude, pos.coords.longitude];

                map.setView(userPos, 14);

                L.marker(userPos).addTo(map)
                    .bindPopup("Tu ubicación")
                    .openPopup();
            },
            () => {
                // Si el usuario NO da permiso → MasterD Oviedo
                L.marker(masterD).addTo(map)
                    .bindPopup("MasterD Oviedo")
                    .openPopup();
            }
        );
    } else {
        // Si el navegador NO soporta geolocalización → MasterD Oviedo
        L.marker(masterD).addTo(map)
            .bindPopup("MasterD Oviedo")
            .openPopup();
    }

});
