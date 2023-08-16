function calcular() {
   let turno, horas, turnoDiurno, turnoNocturno

   turno = (document.getElementById("turno").value);
   horas = parseFloat(document.getElementById("hora").value);

   turno = turno.toLowerCase();

   turnoDiurno = (horas*10);
   turnoNocturno = (horas*15);

   if (turno == "diurno") {
      siu= document.getElementById("respuesta");
      siu.innerHTML = "Hola el total de dolares son: "+turnoDiurno;
   }else if (turno == "nocturno") { 
      siu = document.getElementById("respuesta");
      siu.innerHTML = "Hola el total de dolares son: "+turnoNocturno;
   }else {
      siu = document.getElementById("respuesta");
      siu.innerHTML = "Error revise los datos";
   }
}
