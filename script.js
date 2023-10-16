

// Include the navigation bar using JavaScript
fetch("/nav_bar.html")
        .then(response => response.text())
        .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
});

