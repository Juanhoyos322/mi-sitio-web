const n = document.querySelector("#datoNombre")
const a = document.querySelector("#datoApellido")
const d = document.querySelector("#datoFecha")
const e = document.querySelector("#datoE-mail")
const c = document.querySelector("#datoTelefono")

function almacenarData(){
    let nom, ape, fec, email,cel
    nom = document.getElementById("nombre").value
    ape = document.getElementById("apellido").value
    fec = document.getElementById("fechadenacimiento").value
    email = document.getElementById("correo").value
    cel = document.getElementById("cel").value

    localStorage.setItem("Nombre", nom)
    localStorage.setItem("Apellido", ape)
    localStorage.setItem("Fecha", fec)
    localStorage.setItem("E-mail", email)
    localStorage.setItem("Telefono", cel)

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fechadenacimiento").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cel").value = "";
}

function cargarData(){
    let nombre,apellido,fecha,email,cel
    nombre = localStorage.getItem("Nombre");
    apellido = localStorage.getItem("Apellido");
    fecha = localStorage.getItem("Fecha");
    email = localStorage.getItem("E-mail");
    cel = localStorage.getItem("Telefono");

    n.innerHTML = "<b>"+nombre+"</b>";
    a.innerHTML = "<b>"+apellido+"</b>";
    d.innerHTML = "<b>"+fecha+"</b>";
    e.innerHTML = "<b>"+email+"</b>";
    c.innerHTML = "<b>"+cel+"</b>";
}
