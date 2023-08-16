function resultado() {
    let numa, numb
    numa = parseFloat(document.getElementById("uno").value)
    numb = parseFloat(document.getElementById("dos").value)
if(numa == numb){
  siu = document.getElementById("res");
  siu.innerHTML = "Los números son iguales o son letras"
}else if (numa > numb) {
   siu = document.getElementById("res");
   siu.innerHTML = "El numero mayor es "+numa
}else{
      siu = document.getElementById("res");
      siu.innerHTML = "El numero mayor es "+numb
}}