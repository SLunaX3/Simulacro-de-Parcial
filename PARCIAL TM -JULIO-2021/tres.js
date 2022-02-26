/*
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

	nombreApellido = "";
	genero = "";
	cantHijos =0;
	//estos 3 para que no haga vacío
	control = 0;
	contadorFemenino =0;
	contadorMasculino =0;
	contadorNoBinario =0;

	while(control<10)
	{
		nombreApellido = prompt("Ingrese Nombre y Apellido: ");
		while (nombre == "") 
	    {
	      nombre = prompt("ERROR. Ingrese un nombre: ");
	    }

		genero = prompt("Ingrese género ("Femenino", "Masculino" o "No Binario"): ");
		while(genero!="Femenino"&&genero!="Masculino"&&genero!="No Binario")
		{
			genero = prompt("ERROR. Ingrese "Femenino", "Masculino" o "No Binario": ");
		}

		cantHijos = prompt("Ingrese cantidad de hijos: ");
		cantHijos = parseInt(cantHijos);
		while(isNaN(cantHijos)||cantHijos<0)
		{
			cantHijos = prompt("ERROR. Ingrese una cantidad válida: ");
			cantHijos = parseInt(cantHijos);
		}

		switch (genero) 
	    {
	      case "Femenino":
	        contadorFemenino = contadorFemenino + 1;

	        break;

	      case "Masculino":
	        contadorMasculino = contadorMasculino + 1;
	        break;

	      case "No Binario":
	        contadorNoBinario = contadorNoBinario + 1;
	        break;
	    }


	}

}	
