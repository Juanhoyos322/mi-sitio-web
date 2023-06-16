function calcular() {
    let res1,res2,req

    res1 = parseFloat(document.getElementById("r1").value)
    res2 = parseFloat(document.getElementById("r2").value)

    req=(res1*res2)/(res1+res2)

    mensaje = document.getElementById("equivalente");
    mensaje.innerHTML = "La resistencia equivalente es "+req

}