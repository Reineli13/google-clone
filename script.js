// Capturamos los elementos del DOM
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const luckyBtn = document.getElementById('lucky-btn');

// Evento al enviar el formulario (Click en "Buscar con Google" o presionar Enter)
searchForm.addEventListener('submit', function(e) {
    // Obtenemos el texto ingresado y eliminamos espacios sobrantes al inicio y final
    const query = searchInput.value.trim();

    // Si el campo está vacío, evitamos que se envíe la búsqueda vacía
    if (query === "") {
        e.preventDefault();
        searchInput.focus();
    }
    // Si hay texto, el atributo 'action' del formulario junto con el 'name="q"' 
    // del input redirigirán automáticamente a Google con la consulta.
});

// Funcionalidad extra para el botón "Voy a tener suerte"
luckyBtn.addEventListener('click', function() {
    const query = searchInput.value.trim();
    if (query !== "") {
        // Redirige directamente al primer resultado o búsqueda de suerte de Google
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`;
    } else {
        searchInput.focus();
    }
}); 