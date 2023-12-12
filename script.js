
//placing nav bar on each page
fetch("/nav_bar.html")
        .then(response => response.text())
        .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
});

//Function to organize calendar then track times for each event 