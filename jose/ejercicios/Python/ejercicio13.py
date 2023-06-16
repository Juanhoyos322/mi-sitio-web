nombre=input("ingrese su nombre ")
genero=input("ingrese su genero ")
sueldo=int(input("ingrese su sueldo base "))
años=int(input("cuantos años lleva en la empreza? "))
aumen15=str(sueldo*0.15+sueldo) 
aumen20=str(sueldo*0.20+sueldo) 
if(genero == "masculino" and años > 6):
    print("su bonificacion es de un 20"+"%"+" su sueldo base ahora queda en: "+ aumen20)
elif genero == "masculino" and años <= 6:
    print("su bonificacion es de un 15"+"%"+"su sueldo base ahora queda en: "+ aumen15)

elif(genero == "femenino" and años > 5):
    print("su bonificacion es de un 20"+"%"+" su sueldo base ahora queda en: "+ aumen20)
elif genero == "femeninino" and años <= 5:
    print("su bonificacion es de un 15"+"%"+"su sueldo base ahora queda en: "+ aumen15)