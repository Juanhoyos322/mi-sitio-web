<form action="#" method="post">
    <input type="number" name="numero"><br>
    <button type="submit">enviar</button>
</form>


<?php

$numero = $_POST["numero"];

echo "el numero elegido es ".$numero;

?>