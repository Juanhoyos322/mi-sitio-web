print("Ingrese las tres calificaciones ")

not1=int(input("Calificacion 1: "))
not2=int(input("Calificacion 2: "))
not3=int(input("Calificacion 3: "))

promedio = str((not1+not2+not3)/3)

if promedio > "69":
    print("Usted aprobo su calificacion es de "+promedio)

else:
    print("Usted no aprobo su calificacion final es de "+promedio)



