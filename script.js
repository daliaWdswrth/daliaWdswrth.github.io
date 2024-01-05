
//placing nav bar on each page
fetch("/nav_bar.html")
        .then(response => response.text())
        .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
});

function toggleSliderNav() {
        var sliderNav = document.querySelector('.slider-nav');
        sliderNav.classList.toggle('hidden');
        //add for videos?
}

