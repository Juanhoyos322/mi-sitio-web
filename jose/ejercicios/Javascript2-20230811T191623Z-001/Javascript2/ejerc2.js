function resultado() {
    let num1, num2, num3
    num1 = parseFloat(document.getElementById("num1").value)
    num2 = parseFloat(document.getElementById("num2").value)
    num3 = parseFloat(document.getElementById("num3").value)

if (num1 < num2 && num1 < num3) {
    siu = document.getElementById("res");
    siu.innerHTML = "El número menor es "+num1
}if  (num2 < num1 && num2 < num3){
    siu = document.getElementById("res");
    siu.innerHTML = "El número menor es "+num1
}if (num3 < num1 && num3 < num2){
    siu = document.getElementById("res");
    siu.innerHTML = "El número menor es "+num3
}
if (num1 == num2) {
  if (num1 < num3){
    siu = document.getElementById("res");
      siu.innerHTML= "Hay dos números iguales y el menor es: "+num1
    }
}
if (num1 == num3) {
  if (num1 < num2){
    siu = document.getElementById("res");
    siu.innerHTML= "Hay dos números iguales y el menor es: "+num1
  }
}
if (num2 == num3) {
  if (num2 < num3){
    siu = document.getElementById("res");
    siu.innerHTML= "Hay dos números iguales y el menor es: "+num2
  }
}
}