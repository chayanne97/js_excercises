// arrays 

// coleccion ordenada de datos, se emplea para almacenar multiples valores en una sola variable

//sintaxis 
//var nombredelArray =[ ];
 
//Acceder a los valores del array
// nombredelArray [posicion]

//ejemplo
//var colores = ['negro','verde','rojo','azul','naranja' ];

//console.log(colores);

//colores['negro'] = "gris"
//console.log(colores);
//var frutas=['mandarina','naranja','pera'];
var clasificaciones=['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio'];
console.log(clasificaciones)
//Celia adelanta a raul 
clasificaciones[2]="Celia"
clasificaciones[3]="Raúl"
console.log(clasificaciones)
// Antonio es descalificado 
clasificaciones.pop();
console.log(clasificaciones)
//alert(clasificaciones)
//Detras de ana ingresan dos competidores Roberto y AMaya
clasificaciones.splice(1,0,"Roberto","Amaya")
console.log(clasificaciones)
//se coloca en segundo lugar amaya 
clasificaciones.splice(1,2,"Amaya","Roberto")
console.log(clasificaciones)
// se vuelve a colocar en segundo lugar Roberto 
clasificaciones.splice(1,2,"Roberto","Amaya")
console.log(clasificaciones)
//se coloca en primer lugar Marta, una nueva participante. 
clasificaciones.unshift("Marta");
console.log(clasificaciones)
