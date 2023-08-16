function confirmar() {
    let samsung,motorola,huawei,s,m,h,valor

    samsung = parseInt(document.getElementById("Samsung").value)
    motorola = parseInt(document.getElementById("Motorola").value)
    huawei = parseInt(document.getElementById("Huawei").value)

    s = (samsung * 600000);
    m = (motorola * 500000);
    h = (huawei * 550000);

    valor= s+m+h;

    enviar=document.getElementById("enviar")
    enviar.innerHTML = "se compro "+samsung+" dispocitivos samsung sumando un total de "+s+"<br>"+"se compro "+motorola+" dispocitivos motorola sumando un total de "+m+"<br>"+"se compro "+huawei+" dispocitivos huawei sumando un total de "+h+"<br>"+"<br>"+"el valor total a pagar es "+valor
}