export function renderPage(url) {
    console.log('I am in render');
    fetch(url)
        .then(response => response.text())
        .then(data => {
        var contentDiv = document.getElementById('main');
        contentDiv.innerHTML = data;
    })
        .catch(error => {
        console.error('Unable to load page', error);
    });
}
