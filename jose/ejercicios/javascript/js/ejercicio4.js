function calcular() {
    let valor, descuento,porciento

    valor = parseInt(document.getElementById("valor").value)
    descuento = parseInt(document.getElementById("descuento").value)

    porciento = valor*(-descuento/100)+valor

    mensaje=document.getElementById("mensaje");
    mensaje.innerHTML = "El precio final con el "+descuento+"% descuento es "+porciento




}