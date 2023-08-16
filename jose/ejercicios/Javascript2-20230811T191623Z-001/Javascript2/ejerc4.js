function Calcular() {
let hora,estacio
 hora = parseInt(document.getElementById("hora").value)  
 mensaje = document.getElementById("reshora");
 mensaje.innerHTML = "Las horas son "+hora

 estacio = hora*1500
 document.getElementById("res").innerText = estacio
}