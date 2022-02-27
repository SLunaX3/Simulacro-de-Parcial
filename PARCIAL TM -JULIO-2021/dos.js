/*
Luna, Sonia
DIV I
SIMULACRO
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
	var acumuladorImporteJuan;
	var acumuladorImportePedro;
	var acumuladorImporteMaria;
	var comisionExtra;
	var comision;
	var ImporteMaximo;
	var comisionJuan;
	var comisionPedro;
	var comisionMaria;
	var ventasJuan;
	var ventasPedro;
	var ventasMaria;
	var vendedorMayorRecaudacion;

	respuesta = true;
	ImporteMaximo = 500000;
	comisionExtra = 10;
	comision = 5;
	acumuladorImporteJuan = 0;
	acumuladorImportePedro =0;
	acumuladorImporteMaria =0;
	ventasJuan =0;
	ventasPedro =0;
	ventasMaria =0;

	while(respuesta == true)
	{
		vendedor = prompt("Ingrese el vendedor (Juan, Pedro o Maria): ");
		while(vendedor!="Juan"&&vendedor!="Pedro"&&vendedor!="Maria")
		{
			vendedor = prompt("Error. Ingrese Juan, Pedro o Maria: ");
		}

		importe = prompt("Ingrese Importe: ");
		importe = parseFloat(importe);
		while(isNaN(importe)||importe<0||importe>10000)
		{
			importe = prompt ("Error. Importe supera los $10000 ");
			importe = parseFloat(importe);
		}
		
		//calcular el total de la comision por vendedor
		switch(vendedor)
		{
			case "Juan":
			acumuladorImporteJuan+=importe;
			ventasJuan++;
			break;
			case "Pedro":
			acumuladorImportePedro+=importe;
			ventasPedro++;
			break;
			case "Maria":
			acumuladorImporteMaria+=importe;
			ventasMaria++;
			break;
		}


		respuesta = confirm("Desea agregar más datos? ");
	}
//Vendedor ventas mayor o igual a $500000 , comisión del 10% sobre ese total.
//De no alcanzar esta cifra, su comision sera del 5%.
	if (acumuladorImporteJuan>=ImporteMaximo) 
	{
		comisionJuan = acumuladorImporteJuan + acumuladorImporteJuan * comisionExtra/100;
	}
	else
	{
		comisionJuan = acumuladorImporteJuan + acumuladorImporteJuan * comision/100;
	}

	if (acumuladorImportePedro>=ImporteMaximo) 
	{
		comisionPedro = acumuladorImportePedro + acumuladorImportePedro * comisionExtra/100;
	}
	else
	{
		comisionPedro = acumuladorImportePedro + acumuladorImportePedro * comision/100;
	}

	if (acumuladorImporteMaria>=ImporteMaximo) 
	{
		comisionMaria = acumuladorImporteMaria + acumuladorImporteMaria * comisionExtra/100;
	}
	else
	{
		comisionMaria = acumuladorImporteMaria + acumuladorImporteMaria * comision/100;
	}

	//b. El nombre del vendedor que mas dinero recaudo en comisiones
	if (comisionJuan>comisionPedro && comisionJuan>comisionMaria)
    {
        vendedorMayorRecaudacion = "Juan recuadó más dinero en comisiones";
    }
    else
    {
        if (comisionPedro>comisionMaria) 
        {
           vendedorMayorRecaudacion = "Pedro racuadó más dinero en comisiones";
        }
        else
        {
            vendedorMayorRecaudacion = "Maria recaudó más dunero en comisiones";
        }
    }

    //a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
    document.write("JUAN: importe total de ventas: $" +acumuladorImporteJuan+" . Cantidad de ventas: "+ventasJuan+". Comisión: "+comisionJuan+"<br>");
    document.write("PEDRO: importe total de ventas: $" +acumuladorImportePedro+" . Cantidad de ventas: "+ventasPedro+". Comisión: "+comisionPedro+"<br>");
    document.write("MARIA: importe total de ventas: $" +acumuladorImporteMaria+" . Cantidad de ventas: "+ventasMaria+". Comisión: "+comisionMaria+"<br>");

    document.write(vendedorMayorRecaudacion + "<br>");

}

