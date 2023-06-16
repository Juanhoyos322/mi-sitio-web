function calcular() {

    let dia,hora,minu,seg

    seg = parseInt(document.getElementById("segundo").value)

    dia = seg/60/60/24
    hora = seg/60/60
    minu = seg/60

    mensajeDia = document.getElementById("dias");
    mensajeDia.innerHTML = "Esa cantidad de segundos equivalen a "+dia+" dias"

    mensajeHora = document.getElementById("horas");
    mensajeHora.innerHTML = "Esa cantidad de segundos equivale a "+hora+" horas"

    mensajeMinuto = document.getElementById("minutos");
    mensajeMinuto.innerHTML = "Esa cantidad de segundos equivalen a "+minu+"minutos"


    
}