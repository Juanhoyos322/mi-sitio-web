<form action="#" method="post">
    ingrese el precio del producto<br><br>
    <input type="number" name="precio"><br><br>
    ingrese el descuento deseado<br><br>
    <input type="number" name="descuento"><br>
    <button type="submit">enviar</button>
</form>

<?php

$precio = $_POST["precio"];
$descuento = $_POST["descuento"];

echo "el total a pagar es".$precio + (-$precio * $descuento / 100);


?>