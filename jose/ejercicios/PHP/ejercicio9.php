<form action="#" method="post">
    ingrese los segundos<br>
    <input type="text" name="segundos"><br>
    <button type="submit">enviar</button>
</form>

<?php

$segundos = $_POST["segundos"];

echo "la cantidad ingresada equivale a ".($segundos / 86400)." dias ".($segundos / 3600)." horas ".($segundos / 60)." minutos";

?>