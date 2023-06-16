<form action="#" method="post">
    Cuales son las iniciales de tu nombre?<br><br>
    <input type="text" name="nombre"><br><br>
    Cual es tu estatura?<br><br>
    <input type="number" name="estatura">
    <button type="submit">enviar</button>
</form>


<?php

$nombre = $_POST["nombre"];
$estatura = $_POST["estatura"];

echo "sus iniciales son: ".$nombre." y su estatura es ".$estatura."cm";

?>