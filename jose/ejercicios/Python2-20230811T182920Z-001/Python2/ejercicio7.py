sueldo = float(input("Ingrese el sueldo del trabajador: "))

if sueldo <= 500000 and sueldo >0 :
    descuento = str(sueldo * -0.12 + sueldo )
    print("El descuento que se le hace a su sueldo es de 12"+"%"+" su sueldo queda en "+descuento)

if sueldo > 500000 and sueldo <= 1000000:
    descuento = str(sueldo * -0.15 + sueldo )
    print("El descuento que se le hace a su sueldo es de 15"+"%"+" su sueldo queda en "+descuento)

if sueldo > 1000000:
    descuento = str(sueldo * -0.18 + sueldo )
    print("El descuento que se le hace a su sueldo es de 18"+"%"+" su sueldo queda en "+descuento)
if sueldo <= 0:
    print("Error")