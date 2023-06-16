<form action="#" method="post">
    ingrese el correo<br><br>
    <input type="text" name="correo"><br><br>
    ingrese la contraseña<br><br>
    <input type="text" name="contraseña"><br>
    <button type="submit">enviar</button>
</form>

<?php

$correo = $_POST["correo"];
$contraseña = $_POST["contraseña"];

if($correo == "fund@gmail.com" && $contraseña == "123456"){
    echo "biemvenido a fundamentos de programacion";
}
else{
    echo "usuario o contraseña incorrecta";
}

?>