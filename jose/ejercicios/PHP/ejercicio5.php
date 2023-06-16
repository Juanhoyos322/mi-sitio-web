<form action="#" method="post">
    igrese la medida en metros del lado A del rectangulo<br><br>
    <input type="text" name="ladoA"><br><br>
    ahora ingrese la medida en metros del lado B del rectangulo<br><br>
    <input type="text" name="ladoB"><br>
    <button type="submit">enviar</button>
</form>

<?php

$ladoA = $_POST["ladoA"];
$ladoB = $_POST["ladoB"];

echo "el perimetro del rectangulo es ".$ladoA + $ladoB."m y el area equivale a ".$ladoA * $ladoB."m";

?>