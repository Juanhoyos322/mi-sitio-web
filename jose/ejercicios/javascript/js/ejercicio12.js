function revisar() {

    let email,password
    email = document.getElementById("correo").value
    password = document.getElementById("contraseña").value

    if (email == "fund@gmail.com" && password == "123456") {
        mensajea = document.getElementById("alert");
        mensajea.innerHTML = "Bienvenidos a Fundamentos de la programacion"
        
    } else {
        mensajeb = document.getElementById("alert");
        mensajeb.innerHTML = "Error en los datos de ingreso"
    }
    
}