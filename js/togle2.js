// 1. asocioamos el togle-box
let togglebox = document.getElementById("togglebox")
let choicebox = document.getElementById("choicebox")
// 2. verificamos que clase se envuentra en choice-box
togglebox.addEventListener("click", function()){
    if(choicebox.classList.contains("choicebox")){
        choicebox.classList.add("choicebox")
    }
}
// 3. al dar clickquitamos la clase por defecto de choice-box 
// 4. agregamos la clase que venia con el hover de choice-box 


