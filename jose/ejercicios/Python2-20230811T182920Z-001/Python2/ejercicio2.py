print("Segundo ejercicio")

n1 = float(input("ingrese primer número "))
n2 = float(input("ingrese primer número "))
n3 = float(input("ingrese primer número ")) 

if n1 < n2 and n1 < n3:
    menor = n1
    print("el número menor es:",menor)
if(n2 < n1 and n2 < n3):
    menor = n2
    print("el número menor es:",menor)
if(n3 < n1 and n3 < n2):
    menor = n3
    print("el número menor es:",menor)
elif(n1 == n2 or n2 == n3 or n3 == n1):{
    print("Hay números iguales o son letras")}
