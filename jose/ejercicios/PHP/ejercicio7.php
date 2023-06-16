<form action="#" method="post">
    ingrese el radio<br>
    <input type="text" name="radio"><br>
    <button type="submit">enviar</button>
</form>

<?php

$radio = $_POST["radio"];
$pi = 3.1416;
$per = 2 * $pi * $radio;
$are = $pi * $radio * $radio;
$vol = 4 * $pi * ($radio * $radio * $radio) / 3;

echo "el perimetro equivale a ".$per.", el area equivale a ".$are." y el volumen es igual a".$vol;

?>