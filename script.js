// A gomb kiválasztása
const backToTopButton = document.getElementById('backToTop');

// Figyeljük az ablak görgetését
window.addEventListener('scroll', function() {
    // Ha a felhasználó 200 pixelnél többet görget lefelé, megjelenik a gomb
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// A gomb kattintás eseménye
backToTopButton.addEventListener('click', function() {
    // Simán visszagörgetünk a tetejére
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
