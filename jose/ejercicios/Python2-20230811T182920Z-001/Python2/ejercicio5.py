print("Quinto ejercicio ")
turno= input ("Ingrese su turno (nocturno/diurno) ")
hora= int(input("Ingrese sus horas trabajadas "))
turnod = hora*10
turnon = hora*15

if turno.lower() == "nocturno":
    print("Hola el total de dolares son: ",turnon)
if turno.lower() == "diurno":
    print("Hola el total de dolares son: ",turnod)
if turno.lower() != "diurno" and turno != "nocturno":
    print("Error")
