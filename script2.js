// script2.js

document.addEventListener("DOMContentLoaded", function () {
    const lightboxLinks = document.querySelectorAll(".lightbox");

    lightboxLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const imageUrl = this.getAttribute("href");
            showLightbox(imageUrl);
        });
    });

    function showLightbox(imageUrl) {
        // Lightbox elem létrehozása
        const lightbox = document.createElement("div");
        lightbox.className = "lightbox-overlay";
        
        // Kép elem létrehozása
        const img = document.createElement("img");
        img.src = imageUrl;
        lightbox.appendChild(img);

        // Kattintás esemény hozzáadása a lightbox bezárásához
        lightbox.addEventListener("click", function () {
            document.body.removeChild(lightbox);
        });

        // Lightbox hozzáadása a body-hoz
        document.body.appendChild(lightbox);
    }
});
