function calcular() {
    let dias,horas,minutos,segundos

    dias = parseInt(document.getElementById("dia").value)
    horas = parseInt(document.getElementById("hora").value)
    minutos = parseInt(document.getElementById("minutos").value)

    segundos =  (minutos + ((horas + (dias * 24)) * 60)) * 60

    mensajeSegundos = document.getElementById("segundos");
    mensajeSegundos.innerHTML= "Esta es la cantidad de segundos que se optienen con "+dias+"dias mas "+horas+"horas y "+minutos+"minutos son: "+segundos
    
}