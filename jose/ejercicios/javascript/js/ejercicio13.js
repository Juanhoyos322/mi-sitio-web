function verificar() {

    let nombre,genero,sueldo,tiempo,aumen15,aumen20

    nombre = document.getElementById("nom").value
    genero = document.getElementById("genero").value
    sueldo = parseInt(document.getElementById("sueldo").value)
    tiempo = document.getElementById("servicio").value
    aumen15 = sueldo * 0.15 + sueldo
    aumen20 = sueldo * 0.20 + sueldo

    if (genero == "f" && tiempo > 5) {
        mensajeA = document.getElementById("a");
        mensajeA.innerHTML= "Hola " + nombre + " la bonificacion que optiene este año es de un 20% de su salario basico que es "+aumen20
    } 
    if (genero == "f" && tiempo <= 5) {    
        mensajeB = document.getElementById("a");
        mensajeB.innerHTML= "Hola " + nombre + " la bonificacion que optiene este año es de un 15% de su salario basico que es "+aumen15
    }
    if (genero == "m" && tiempo > 6) {
        mensajeC = document.getElementById("a");
        mensajeC.innerHTML= "Hola " + nombre + " la bonificacion que optiene este año es de un 20% de su salario basico que es "+aumen20
    }
    if (genero == "m" && tiempo <= 6) {
        mensajeD = document.getElementById("a");
        mensajeD.innerHTML= "Hola " + nombre + " la bonificacion que optiene este año es de un 15% de su salario basico que es "+aumen15
    }else{
        mensajeE = document.getElementById("a");
        mensajeE.innerHTML= "Tienes un error en algun dato"
    }

    
}