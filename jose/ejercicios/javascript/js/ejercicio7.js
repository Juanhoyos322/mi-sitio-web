function calcular() {
    let pi,radio,area,perimetro,volumen

    pi = 3.1416
    radio = parseFloat(document.getElementById("radio").value)
    area = pi * (radio * radio)
    perimetro = 2 * pi * radio
    volumen = 4 * pi * (radio * radio * radio)/3

    mensajeVolumen = document.getElementById("volumen");
    mensajeVolumen.innerHTML = "El volumen de la circunferencia es "+volumen

    mensajePerimetro = document.getElementById("perimetro");
    mensajePerimetro.innerHTML = "El perimetro de la circunferenca es "+perimetro

    mensajeArea = document.getElementById("area");
    mensajeArea.innerHTML = "El area de la circunferencia es "+area 
    
}