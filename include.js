function loadContent(source, targetId) {
    fetch(source)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const content = doc.querySelector('body').innerHTML;
            document.getElementById(targetId).innerHTML = content;
        })
        .catch(error => console.error('Error cargando el contenido:', error));
}