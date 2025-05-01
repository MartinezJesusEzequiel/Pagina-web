document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Gracias por tu mensaje!");
});

document.querySelectorAll(".habilidad").forEach(function(habilidad) {
    habilidad.addEventListener("click", function() {
        alert(`Has seleccionado la habilidad: ${this.querySelector("h3").textContent}`);
    });
});