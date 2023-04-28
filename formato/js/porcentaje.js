function SinDescuento(){
    let cantidad

    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value
    

    let valorTotal
    valorTotal = cantidad*valor

    document.getElementById("SinDescuento").innerHTML = "<div> el valor es "+cantidad*valor+"</div>"

}

function quinceDeDescuento(){
    let cantidad

    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value

    let valorTotal
    valorTotal = cantidad*valor*50/100

    document.getElementById("SinDescuento").innerHTML = "<div> el valor es "+cantidad*valor*15/100+"</div>"
}

function cincuentaDeDescuento(){
    let cantidad

    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value

    let valorTotal
    valorTotal = cantidad*valor*50/100

    document.getElementById("SinDescuento").innerHTML = "<div> el valor es "+cantidad*valor*50/100+"</div>"
    document.getElementById("SinDescuento").innerHTML = "<div> paga "+valorTotal-50/100+"</div>"
}