document.addEventListener("DOMContentLoaded", function() {
    // Formulario
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Gracias por tu mensaje!");
    });

    // Habilidades
    document.querySelectorAll(".habilidad").forEach(function(habilidad) {
        habilidad.addEventListener("click", function() {
            alert(`Has seleccionado la habilidad: ${this.querySelector("h3").textContent}`);
        });
    });

    // Modo oscuro
    document.getElementById('darkModeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
});