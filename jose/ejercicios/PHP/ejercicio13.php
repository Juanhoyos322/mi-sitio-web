<form action="#" method="post">
   ingrese su nombre<br>
    <input type="text" name="nombre"><br>
   ingrese su genero<br>
    <input type="list" name="genero"><br>
    ingrese su sueldo base <br>
    <input type="number" name="sueldo"><br>
    ingrese sus años en la empresa <br>
    <input type="text" name="años"><br>
    <button type="submit">enviar</button>
</form>


<?php

$nombre = $_POST["nombre"];
$genero = $_POST["nombre"];
$sueldo = $_POST["nombre"];
$años = $_POST["nombre"];
$descuento15 = $sueldo*0.15+$sueldo;
$descuento20 = $sueldo*0.20+$sueldo;

if($genero == "masculino" && $años > 6){
    echo "su bonificacion es de un 20% su sueldo base ahora queda en: ".$descuento20;
}
else{
    echo "su bonificacion es de un 15% su sueldo base ahora queda en: ".$descuento15;
}

if($genero == "femenino" && $años > 5){
    echo "su bonificacion es de un 20% su sueldo base ahora queda en: ".$descuento20;
}
else{
    echo "su bonificacion es de un 15% su sueldo base ahora queda en: ".$descuento15;
}

?>