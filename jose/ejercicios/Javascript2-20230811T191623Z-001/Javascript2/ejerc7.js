function calcularDescuento() {
    let sueldo = parseFloat(document.getElementById("sueldo").value);

    if (sueldo <= 0) {
        let resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = "Error: Por favor, ingrese un sueldo valido mayor a 0.";
        return;
    }

    let descuento = 0;

    if (sueldo <= 500000) {
        descuento = sueldo * 0.12;
    } else if (sueldo > 500000 && sueldo <= 1000000) {
        descuento = sueldo * 0.15;
    } else {
        descuento = sueldo * 0.18;
    }

    let sueldoTotal = sueldo - descuento;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "El descuento es de " + descuento.toFixed(2) + " y su sueldo total es de " + sueldoTotal.toFixed(2);
}