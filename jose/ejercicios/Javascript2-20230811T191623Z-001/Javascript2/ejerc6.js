function calcular() {
    let hora,sueldo_semanal,horas_extras,suledo_extras,sueldo_base

    hora = parseFloat(document.getElementById("horas").value)

    if (hora <= 40){
        sueldo_semanal = (hora * 20);
    }else{
        sueldo_base = (40*20);
        horas_extras= hora - 40;
        suledo_extras = horas_extras * 25;
        sueldo_semanal = sueldo_base + suledo_extras;
    }
    mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "El sueldo semanal es "+sueldo_semanal+" dolares"
}