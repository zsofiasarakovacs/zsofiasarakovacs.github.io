document.getElementById('dice-icon').addEventListener('click', function() {
    // API hívás a random fun fact megszerzéséhez
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => {
        // A fun fact megjelenítése a buborékban
        document.getElementById('fun-fact-text').innerText = data.text;
        const bubble = document.getElementById('fun-fact-bubble');
        bubble.style.display = 'block';

        // Buborék eltüntetése 5 másodperc után
        setTimeout(() => {
            bubble.style.display = 'none';
        }, 5000); // 5 másodperc
    })
    .catch(error => {
        console.error('Hiba történt a fun fact API hívás során:', error);
    });
});
