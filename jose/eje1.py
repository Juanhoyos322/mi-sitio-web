no=(input("Ingrese su nombre: "))
c=(input("Ingrese ciudad: "))
f=(input("Ingrese la Fecha dd/mm/aa: "))
producto=(input("Ingrese el nombre del producto: "))
valor=int(input("Ingrese el valor del producto: "))
cantidad=int(input("Ingrese la cantidad del producto deseado: "))
valort=str((valor*cantidad))
descuento=str((valor*cantidad*17.5/100))
valortd=str((valor+(-valor*cantidad*17.5/100)))

if f.lower() == "11/08/2023" or "11 de agosto" or "11 de agosto de 2023" :
    print("FACTURA ")
    print("Informacion del cliente: ",no 
    ,c ,f)
    print("Producto: ",producto)
    print("Cantidad: ",cantidad)
    print("valor por unidad: ",valor)
    print("valor de la compra: ",valort)
    print("valor del descuento: ",descuento)
    print("valor a pagar: ",valortd)

if no ==  " " or c == " " or f ==  " " or producto == "" or valor == "" or cantidad == "":

    print ("algun dato erroneo")