document.getElementById("menu-btn").addEventListener("click", function() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});


document.addEventListener("click", function(event) {
    let menu = document.getElementById("menu");
    let button = document.getElementById("menu-btn");
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
    }
});

let index = 0;

function moveSlide(direction) {
    const slides = document.querySelector(".carrossel-container");
    index += direction;

    if (index > 1) index = 0;  
    if (index < 0) index = 1;  

    slides.style.transform = `translateX(${-index * 1100}px)`;
}

setInterval(() => moveSlide(1), 3000);

