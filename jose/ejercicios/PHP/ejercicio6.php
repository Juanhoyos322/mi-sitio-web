<form action="#" method="post">
    escriba los pesos que desea covertir<br>
    <input type="text" name="pesos"><br>
    <button type="submit">enviar</button>
</form>

<?php

$pesos = $_POST["pesos"];
$euros = $pesos / 4444;

echo "su valos rn euros equivale a ".$euros;

?>