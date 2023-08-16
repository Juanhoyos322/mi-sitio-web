<form action="#" method="post">
<h2>Ingresa la edad del paciente:</h2><br>
    <select name="edad" id="edad">
        <option value="0">edad</option>
        <option value="mes">0-1 Mes</option>
        <option value="1"> 1-6 Meses</option>
        <option value="6"> 6-12 Meses</option>
        <option value="1a"> 1-5 Años</option>
        <option value="6a"> 6-10 Años</option>
        <option value="di"> 11-15 Años</option>
        <option value="mas"> Mas de 15 Años</option>
    </select><br>
    <h2>Ingrese el genero del paciente:</h2><br>
    <select name="genero" id="genero">
        <option value="0">Genero</option>
        <option value="h">Masculino</option>
        <option value="M">Femenino</option>
    </select><br><br>
    <h2>Ingrese el nivel de hemoglobina: </h2><br>
    <input type="number" name="nivel" id="nivel" placeholder="Nivel de Hemoglobina"><br><br>

    

    <input type="submit" value="Calcular"><br><br>
</form>


<?php
$años = $_POST['edad'];
$genero = $_POST['genero'];
$hemoglobina = $_POST['nivel'];


if ($años === "mes") {
    if ($hemoglobina > 26 ) {
        echo "El paciente tiene un exeso de hemoglobina.";
    }
    if ($hemoglobina > 12 and $hemoglobina  <= 26) {
        echo "El paciente no tiene anemia.";
    }
    
    if ($hemoglobina < 13) {
        echo "El paciente si tiene anemia.";
    }
}

if ($años == "1") {
    if ($hemoglobina > "18" ) {
        echo "El paciente tiene un exeso de hemoglobina.";
    }
    if ($hemoglobina >= "10" and $hemoglobina  <= "18") {
        echo "El paciente no tiene anemia.";
    }
    if($hemoglobina < "10"){
        echo "El paciente si tiene anemia.";
    }
}

if ($años == "6") {
    if ($hemoglobina > "15" ) {
        echo "El paciente tiene un exeso de hemoglobina.";
    }
    if ($hemoglobina >= "11" and $hemoglobina  <= "15") {
        echo "El paciente no tiene anemia.";
    }
    if($hemoglobina < "11"){
        echo "El paciente si tiene anemia.";
    }
}

    if ($años == "1a") {
        if ($hemoglobina > 15 ) {
            echo "El paciente tiene un exeso de hemoglobina.";
        }
        if($hemoglobina < "11.5"){
            echo "El paciente si tiene anemia.";
        }
        if ($hemoglobina >= "11.5" and $hemoglobina  <= "15") {
            echo "El paciente no tiene anemia.";
        }
        
    }
    
    if ($años == "6a") {
        if ($hemoglobina >= 12.6 and $hemoglobina  <= 15.5) {
            echo "El paciente no tiene anemia.";
        }if ($hemoglobina > 15.5 ) {
            echo "El paciente tiene un exeso de hemoglobina.";
        }
        if($hemoglobina < 12.6){
            echo "El paciente si tiene anemia.";
        }
    }
    
    if ($años == "di") {
        if ($hemoglobina >= 13 and $hemoglobina  <= 15.5) {
            echo "El paciente no tiene anemia.";
        }if ($hemoglobina > 15.5 ) {
            echo "El paciente tiene un exeso de hemoglobina.";
        }
        if($hemoglobina < 13){
            echo "El paciente si tiene anemia.";
        }
    }
    if ($años == "mas" and $genero == "M") {
        if ($hemoglobina >= 12 and $hemoglobina  <= 16) {
            echo "El paciente no tiene anemia.";
        }if ($hemoglobina > 16 ) {
            echo "El paciente tiene un exeso de hemoglobina.";
        }
        if($hemoglobina < 12){
            echo "El paciente si tiene anemia.";
        }
    }
    if ($años == "mas" and $genero == "h") {
        if ($hemoglobina >= 14 and $hemoglobina  <= 18) {
            echo "El paciente no tiene anemia.";
        }if ($hemoglobina > 18 ) {
            echo "El paciente tiene un exeso de hemoglobina.";
        }
        if($hemoglobina < 14){
            echo "El paciente si tiene anemia.";
        }
    }



?>