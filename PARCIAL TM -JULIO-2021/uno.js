/*
Luna, Sonia
DIV I
SIMULACRO
1.	Se ingresan 5 importes, marca del producto y pais de origen (China, Uruguar o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/

function mostrar()
{
	var marca;
	var pais;
	var importe;
	var promedio;
	var control;
	var banderaImporteMinimo;
	var banderaImporteMaximo;	
	var importeMaximo;
	var importeMinimo;
	var marcaImporteMaximo;
	var paisImporteMinimo;
	var acumuladorImporte;
	var contadorChina;
	var importeMaximoConDesc;

	control = 0;
	respuesta = true;
	banderaImporteMinimo = false;
	banderaImporteMaximo = false;
	acumuladorImporte = 0;
	contadorChina = 0;

	while(control<5)
	{
		pais = prompt("Ingrese pais de origen: ");
		while(pais!="China" && pais!="Uruguay" && pais!="Paraguay")
		{
			pais = prompt("Error. Por favor, ingrese China, Uruguay o Paraguay: ");
		}

		marca = prompt("Ingrese Marca: ");

		importe = prompt("Ingrese Importe: ");
		importe = parseFloat(importe);

		//a.	Minimo importe con su pais

		if (importe<importeMinimo || banderaImporteMinimo == false) 
		{
			importeMinimo = importe;
			paisImporteMinimo = pais;
			banderaImporteMinimo = true;			
		}
		//b.	Maximo importe con su marca
		if (importe>importeMaximo || banderaImporteMaximo == false) 
		{
			importeMaximo = importe;
			marcaImporteMaximo = marca;
			banderaImporteMaximo = true;
		}

		//c.	Promedio importe
		acumuladorImporte += importe;

		//d.	Cantidad de productos de China
		if(pais=="China")
		{	
			contadorChina++;
		}


	control++;
	}

	//c.	Promedio importe
	promedio = acumuladorImporte / control;

	//e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
	importeMaximoConDesc = importeMaximo - importeMaximo * 10/100;
	
	document.write("El mínimo importe es: "+importeMinimo+" . Del país: "+paisImporteMinimo+ "<br>");
	document.write("El máximo Importe es: "+importeMaximo+" . De la marca: " +marcaImporteMaximo + "<br>");
	document.write("El Promedio de la compra es : $" + promedio + "<br>");
	if(contadorChina>0)
	{document.write("La cantidad de Productos de China es :" + contadorChina + "<br>");}	
	document.write("Resultado del maximo importe con 10% de descuento: " + importeMaximoConDesc + "<br>");


}
