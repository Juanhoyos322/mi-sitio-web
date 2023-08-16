function resultado() {
    let numa, numb
    numa = parseInt(document.getElementById("uno").value)
    numb = parseInt(document.getElementById("dos").value)

    if (numa>numb) {
        siu = document.getElementById("res2");
        siu.innerHTML = "El primer numero es mayor "
     }else{
       siu = document.getElementById("res2");
       siu.innerHTML = "Los números son iguales..."
    }
    
    if (numb>numa) {
        siu = document.getElementById("res2");
        siu.innerHTML = "El segundo numero es mayor "
     }
   }