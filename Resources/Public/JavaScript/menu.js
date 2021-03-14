// Quelle: Joschi Kuphal

const menuToggle = document.querySelector('.menu-toggle');
menuToggle.onclick = function() {
    const expanded = this.getAttribute('aria-expanded');

    // Wenn das Menü derzeit eingeblendet ist ...
    if (expanded == 'true') {
        this.setAttribute('aria-expanded', 'false');
        this.textContent = this.getAttribute('data-open');

        // Ansonsten ...
    } else {
        this.setAttribute('aria-expanded', 'true');
        this.textContent = this.getAttribute('data-close');
    }
}