/*
2.	La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA. 

Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas 
hay):

*Nombre de vendedor (Juan, Pedro o Maria)
*Importe de la venta (numero positivo NO mayor que 10000)

Al terminar de cargar las planillas se debe calcular el total de la comision por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendra una 
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comision sera del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones

*/

function mostrar()
{
	var vendedor;
	var importe;	
	var respuesta;
	var contadorVendedor;
	var acumuladorImporte;
	var comisionExtraMas;
	var comisionExtraMenos;

	respuesta = true;
	contadorVendedor = 0;
	acumuladorImporte = 0;

	while(respuesta == true)
	{
		vendedor = prompt("Ingrese el vendedor: ");
		while(vendedor!="Juan"&&vendedor!="Pedro"&&vendedor!="Maria")
		{
			vendedor = prompt("Error. Ingrese algún nombre de los tres vendedores: ");
		}

		importe = prompt("Ingrese Importe: ");
		importe = parseInt(importe);
		while(importe>10000)
		{
			importe = prompt ("Error. Importe supera los $10000 ");
		}
		acumuladorImporte+=importe;

		respuesta = confirm("Desea agregar más datos? ");
	}

	comisionExtraMas = acumuladorImporte * 10/100;
	comisionExtraMenos = acumuladorImporte * 5/100;

	if (acumuladorImporte>=500000) 
	{
		acumuladorImporte = acumuladorImporte + comisionExtraMas;
	}

	if (acumuladorImporte<500000) 
	{
		acumuladorImporte = acumuladorImporte + comisionExtraMenos;
	}

	document.write(""++"<br>")
}

