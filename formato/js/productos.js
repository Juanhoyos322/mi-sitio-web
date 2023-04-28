function valorTotal1(){
    let cantidad1

    cantidad1 = document.getElementById("cantidad1").value

    let valor1
    valor1 = document.getElementById("valor1").value
    

    let valorTotal1
    valorTotal1 = cantidad1*valor1

    document.getElementById("respuesta1").innerHTML = "<div> el valor es "+cantidad1*valor1+"</div>"
}
function valorTotal2(){
    let cantidad2

    cantidad2 = document.getElementById("cantidad2").value

    let valor2
    valor2 = document.getElementById("valor2").value
    

    let valorTotal2
    valorTotal2 = cantidad2*valor2

    document.getElementById("respuesta2").innerHTML = "<div> el valor es "+cantidad2*valor2+"</div>"
}
function valorTotal3(){
    
    let cantidad1

    cantidad1 = document.getElementById("cantidad1").value

    let valor1
    valor1 = document.getElementById("valor1").value

    let cantidad2

    cantidad2 = document.getElementById("cantidad2").value

    let valor2
    valor2 = document.getElementById("valor2").value


    let valorTotal3
    valorTotal3 = cantidad1*valor1 + cantidad2*valor2

    document.getElementById("respuesta3").innerHTML = cantidad1*valor1 + cantidad2*valor2  
}
function factura(){

    let cantidad1

    cantidad1 = document.getElementById("cantidad1").value

    let valor1
    valor1 = document.getElementById("valor1").value
    

    let valorTotal1
    valorTotal1 = cantidad1*valor1

    let cantidad2

    cantidad2 = document.getElementById("cantidad2").value

    let valor2
    valor2 = document.getElementById("valor2").value
    

    let valorTotal2
    valorTotal2 = cantidad2*valor2

    let valorTotal3
    valorTotal3 = cantidad1*valor1 + cantidad2*valor2

    let factura
    factura = cantidad1,valor1,valorTotal1
    cantidad2,valor2,valorTotal2
    valorTotal3

    document.getElementById("respuesta4").innerHTML = "<div> computador/es"+" "+cantidad1+" "+"valor"+" "+valor1+"      "+
    "celular/es"+" "+cantidad2+" "+"valor"+" "+valor2+"     "+"valor total de la compra"+" "*valorTotal3+"</div>"

}
