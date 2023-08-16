function calcular(){
    let paciente,edad,genero,hemoglobina

    paciente=parseInt(document.getElementById("paciente").value)
    edad=parseInt(document.getElementById("edad").value)
    genero=parseInt(document.getElementById("genero").value)
    hemoglobina=parseInt(document.getElementById("hemoglobina").value)

    if(edad == "0" && edad <= "1 mes"){
        if(hemoglobina == "13g%" && hemoglobina <= "25g%"){
         
       if(genero == "hombre")
          enviar=document.getElementById("enviar")
        enviar.innerHTML = "El paciente no tiene anemia"  
        }
        
    }
}