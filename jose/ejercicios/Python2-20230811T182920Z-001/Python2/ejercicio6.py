print("Sexto ejercicio")

nombre = input("Ingrese su nombre ")
horas = float(input("Ingrese el número de horas trabajadas: "))

if horas <= 40:
    sueldo_semanal = horas *20
else:
    sueldo_base = 40 * 20
    horas_extras = horas - 40
    sueldo_extras = horas_extras * 25
    sueldo_semanal = sueldo_base + sueldo_extras
print("Hola ",nombre," el Sueldo semanal es: ",sueldo_semanal," dolares")
