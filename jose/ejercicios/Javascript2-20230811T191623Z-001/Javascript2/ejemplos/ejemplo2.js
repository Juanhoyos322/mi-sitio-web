function calcular() {
    let ca1, ca2, ca3, promedio
    ca1 = parseFloat(document.getElementById("uno").value)
    ca2 = parseFloat(document.getElementById("dos").value)
    ca3 = parseFloat(document.getElementById("tres").value)


    promedio = (ca1 + ca2 + ca3)/3

    if (promedio>69) {
       siu = document.getElementById("res");
       siu.innerHTML = "Usted APROBO su calificación final es de "+promedio
    }
    if (promedio<69) {
       siu = document.getElementById("res");
       siu.innerHTML = "Usted NO APROBO su calificación final es de "+promedio
    }
   }