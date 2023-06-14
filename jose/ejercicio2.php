<form action="#" method="post">
    <input type="text" name="nombre">
    <input type="text" name="apellido">
    <button type="submit">enviar</button>
</form>

<?php

$nombre = $_POST['nombre'] ;
$apellido = $_POST['apellido'];

echo "bienvenido".$nombre." ".$apellido; 

?>