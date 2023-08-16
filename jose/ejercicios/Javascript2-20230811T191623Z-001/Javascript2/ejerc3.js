function Calcular() {
    let nota

    nota = parseFloat(document.getElementById("nota").value)

    if (nota > 7 && nota <= 10) {
        mensaje = document.getElementById("res");
        mensaje.innerHTML = "APROBO"
    }if (nota <= 7 && nota >= 1){
        mensaje = document.getElementById("res");
        mensaje.innerHTML = "NO APROBO"
    }
    if(nota > 10 ){
        mensaje = document.getElementById("res");
        mensaje.innerHTML = "Error"
    }
    if(nota < 1 ){
        mensaje = document.getElementById("res");
        mensaje.innerHTML = "Error"
    }
}