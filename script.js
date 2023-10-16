
//placing nav bar on each page
fetch("/nav_bar.html")
        .then(response => response.text())
        .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
});

