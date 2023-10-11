var menos, mas, cantidad
menos= document.getElementById("menos");
mas= document.getElementById("mas");
cantidad= document.getElementById("cantidad");

mas.addEventListener("click", function(){
    let auxCant = parseInt(cantidad.value);

    if (auxCant < 10 ){
        auxCant++;
        cantidad.value = auxCant;
    }
})

menos.addEventListener("click", function(){
    let auxCant = parseInt(cantidad.value);

    if (auxCant > 0){
        auxCant--;
        cantidad.value = auxCant;
    }
})