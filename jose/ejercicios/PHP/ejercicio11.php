<form action="#" method="post">
    ingrese el valor de la resistencia 1<br><br>
    <input type="number" name="R1"><br><br>
    ingrese el valor de la resistencia 2<br><br>
    <input type="number" name="R2"><br>
    <button type="submit">enviar</button>
</form>

<?php

$R1 = $_POST["R1"];
$R2 = $_POST["R2"];

echo  "la resistencia equivalemte es ".($R1 * $R2) / ($R1 + $R2);

?>