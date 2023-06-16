function calcular() {
    let altura,base,area,perimetro
    
    altura = parseFloat( document.getElementById("altura").value )
    base = parseFloat( document.getElementById("base").value)

    area = base*altura
    perimetro = (base*2) + (altura*2)
    
    mensaje=document.getElementById("mensaje");
    mensaje.innerHTML="El perimetro del rectangulo es "+perimetro+" y el area es "+area
}