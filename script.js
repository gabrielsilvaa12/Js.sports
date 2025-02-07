document.getElementById("menu-btn").addEventListener("click", function() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Fecha o menu ao clicar fora
document.addEventListener("click", function(event) {
    let menu = document.getElementById("menu");
    let button = document.getElementById("menu-btn");
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
    }
});

let index = 0;

function moveSlide(direction) {
    const slides = document.querySelector(".carousel-container");
    index += direction;

    if (index > 2) index = 0;  // Volta para a primeira imagem
    if (index < 0) index = 2;  // Vai para a última imagem

    slides.style.transform = `translateX(${-index * 621}px)`;
}

// Auto-slide a cada 3 segundos
setInterval(() => moveSlide(1), 3000);
