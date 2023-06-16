<form action="#" method="post">
    Cuantos años tienes?<br><br>
    <input type="number" name="años"><br><br>
    <button type="submit">enviar</button>
</form>

<?php

$años = $_POST["años"];

echo "ahora se que tienes".$años." años"

?>