function guardar() {
    let altura,iniciales

    altura = document.getElementById("altura").value
    iniciales = document.getElementById("inicial").value

    mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Sus iniciales son: "+iniciales+" y su altura "+altura
}