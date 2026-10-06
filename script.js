function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");

    mensaje.textContent =
        "Gracias por visitar Natural Glow. ✨ Que nunca le falte su brillo.";

    mensaje.style.opacity = "1";
}


function mostrarCapilares() {
    const capilares = document.getElementById("capilares");
    const faciales = document.getElementById("faciales");

    capilares.style.display = "block";
    faciales.style.display = "none";

    capilares.scrollIntoView({
        behavior: "smooth"
    });
}


function mostrarFaciales() {
    const capilares = document.getElementById("capilares");
    const faciales = document.getElementById("faciales");

    capilares.style.display = "none";
    faciales.style.display = "block";

    faciales.scrollIntoView({
        behavior: "smooth"
    });
}


document.getElementById("capilares").style.display = "none";
document.getElementById("faciales").style.display = "none";
