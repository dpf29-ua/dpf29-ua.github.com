document.addEventListener("DOMContentLoaded", function() {
    var link = document.querySelector('a[href="https://www.plex.tv/plex-pass/purchase?utm_source=app.plex.tv&utm_medium=app&utm_campaign=PP_in-app-upsell_01&utm_content=nav-bar"]');
    
    if (link) {
        link.setAttribute('href', 'https://ovs.serverpf.com');
        link.querySelector('span').innerText = 'Solicitar Contenido';
    }
});
