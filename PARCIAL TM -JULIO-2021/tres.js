/*
Luna, Sonia
DIV I
SIMULACRO 
3.	De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)

El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que: 

   *Si no tiene hijos no le corresponde asignación familiar 
   *Si tiene un hijo le corresponde 5000
   *Si tiene dos hijos le corresponde 8000 por sus dos hijos
   *Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones

*/

function mostrar()
{
	var nombreApellido;
	var genero;
	var cantHijos;
	var control;
	var contadorFemenino;
	var contadorMasculino;
	var contadorNoBinario;
	var porcentajeEmpleadosF;
	var porcentajeEmpleadosM;
	var porcentajeEmpleadosNB;
	var cantHijosMaxNB;
	var banderaCantHijosMaxNB;
	var nombreCantHijosMaxNB;
	var banderaNoHijos;
	var nombreNoHijos;
	var asignacionFamiliar;
	var acumuladorAsignaciones;

	nombreApellido = "";
	genero = "";
	cantHijos =0;
	//estos 3 para que no haga vacío
	control = 0;
	contadorFemenino =0;
	contadorMasculino =0;
	contadorNoBinario =0;
	cantHijosMaxNB =0;
	banderaCantHijosMaxNB = false;
	banderaNoHijos = true;
	acumuladorAsignaciones =0;


	while(control<10)
	{
		nombreApellido = prompt("Ingrese Nombre y Apellido: ");
		while (nombre == "") 
	    {
	      nombre = prompt("ERROR. Ingrese un nombre: ");
	    }

		genero = prompt("Ingrese género (Femenino, Masculino o No Binario): ");
		while(genero!="Femenino"&&genero!="Masculino"&&genero!="No Binario")
		{
			genero = prompt("ERROR. Ingrese Femenino, Masculino o No Binario: ");
		}

		cantHijos = prompt("Ingrese cantidad de hijos: ");
		cantHijos = parseInt(cantHijos);
		while(isNaN(cantHijos)||cantHijos<0)
		{
			cantHijos = prompt("ERROR. Ingrese una cantidad válida: ");
			cantHijos = parseInt(cantHijos);
		}

		//c. Nombre y apellido del primer empleado que no tiene hijos.
		if (cantHijos==0 && banderaNoHijos==true) 
		{
			nombreNoHijos = nombreApellido;
			banderaNoHijos = false;
		}
		//a. Porcentaje de empleados por cada genero.
		switch (genero) 
	    {
	      case "Femenino":
	        contadorFemenino++;
	        break;

	      case "Masculino":
	        contadorMasculino++;	        
	        break;

	      case "No Binario":
	        contadorNoBinario++;	        
	        //b. El nombre del empleado No Binario con mas cantidad de hijos.
	        if (cantHijos>cantHijosMaxNB || banderaCantHijosMaxNB == false) 
			{
				cantHijosMaxNB = cantHijos;
				nombreCantHijosMaxNB = nombreApellido;
				banderaCantHijosMaxNB = true;
			}
	        break;
	    }
	   /*
	   *Si no tiene hijos no le corresponde asignación familiar 
	   *Si tiene un hijo le corresponde 5000
	   *Si tiene dos hijos le corresponde 8000 por sus dos hijos
	   *Y si tiene más de dos hijos le corresponde 10000
	   */
	   switch (cantidadHijos) 
	   {
	      	case 0:
	      	asignacionFamiliar = 0;
	      	break;
	      	case 1:
	      	asignacionFamiliar = 5000;
	     	break;
		 	case 2:
		    asignacionFamiliar = 8000;
		    break;
	      	default:
	        asignacionFamiliar = 10000;
	        break;
	   }


//d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones
	    acumuladorAsignaciones+=asignacionFamiliar;

	control++;
	}

	//a. Porcentaje de empleados por cada genero.
	porcentajeEmpleadosF = contadorFemenino*100 /10;
	porcentajeEmpleadosM = contadorMasculino*100 /10;
	porcentajeEmpleadosNB = contadorNoBinario*100 /10;


	//a. Porcentaje de empleados por cada genero.
	document.write("Porcentaje Empleados Femeninos: "+porcentajeEmpleadosF+"<br>");
	document.write("Porcentaje Empleados Masculinos: "+porcentajeEmpleadosM+"<br>");
	document.write("Porcentaje Empleados No Binarios: "+porcentajeEmpleadosNB+"<br>");
	//b. El nombre del empleado No Binario con mas cantidad de hijos.
	document.write("Nombre del empleado No Binario con mas cantidad de hijos: "+nombreCantHijosMaxNB+"<br>");
	//c. Nombre y apellido del primer empleado que no tiene hijos.
	document.write("Nombre y apellido del primer empleado que no tiene hijos: "+nombreNoHijos+"<br>");
	//d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones
	document.write("Total de dinero a pagar la PYME en concepto de asignaciones: $"+acumuladorAsignaciones+"<br>");

}	
