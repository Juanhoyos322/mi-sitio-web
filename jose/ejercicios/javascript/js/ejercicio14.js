function calcular() {
    let ph,mo,p,ca,mg,k,al

    ph = parseFloat(document.getElementById("ph").value)
    mo = parseFloat(document.getElementById("mo").value)
    p = parseFloat(document.getElementById("p").value)
    ca = parseFloat(document.getElementById("ca").value)
    mg = parseFloat(document.getElementById("mg").value)
    k = parseFloat(document.getElementById("k").value)
    al = parseFloat(document.getElementById("al").value)


    if (ph >= 5 && ph <= 5.5 && mo > 8 && p > 30 && ca > 3 && mg > 0.9 && k > 0.4 && al < 1) {
        mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = "Los parametros para la siembra de cafe son aptos"
        
    } else {
        mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = "Los parametros para la siembra de cafe no son aptos"
    }



}