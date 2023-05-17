let MenuH = document.getElementById("MenuH")
let mainMenu = document.getElementById("mainMenu")

MenuH.addEventListener("click", function(){
if(mainMenu.classList.contains("main-menu")){
   mainMenu.classList.add("main-manu-block");
   mainMenu.classList.remove("main-menu");
}
else{
    mainMenu.classList.remove("main-manu-block");
   mainMenu.classList.add("main-menu");
}
    
    
})