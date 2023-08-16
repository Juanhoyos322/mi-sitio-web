function resultado() {
    let edad 
    edad = parseFloat(document.getElementById("edad").value)
   
    if (edad>17) {
       siu = document.getElementById("res");
       siu.innerHTML = "Usted tiene: " + edad + " años es MAYOR de edad"
    }
    if (edad<17) {
       siu = document.getElementById("res");
       siu.innerHTML = ""
    }
   }