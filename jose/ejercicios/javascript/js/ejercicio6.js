function convertir() {
    let pesos,euros

    pesos=parseInt(document.getElementById("pesos").value)

    euros=pesos/4444

    mensaje=document.getElementById("mensaje");
    mensaje.innerHTML="El cambio de "+pesos+"pesos a euros es de "+euros+"Euros"
    
}