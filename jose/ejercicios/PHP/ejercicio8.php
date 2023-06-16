<form action="#" method="post">
   ingrese los dias<br><br>
    <input type="text" name="dias"><br><br>
   ingrese las horas<br><br>
    <input type="text" name="horas"><br>
    ingrese los minutos <br><br>
    <input type="text" name="minutos"><br>
    <button type="submit">enviar</button>
</form>

<?php

$dias = $_POST["dias"];
$horas = $_POST["horas"];
$minutos = $_POST["minutos"];

echo "la cantidad ingresada equivale a ".(86400 * $dias) + (3600 * $horas) + (60 * $minutos)." segundos";

?>