//receta para utilizar una funcion 
//  1er paso: declarar mi funcion 
// 2do crear una variable y establecer los parametros de mi funcion 
// 3er dentro de {} poner codigo a ejecutar por mi funcion 
// ejecutar nuestra funcion 

function resta (a,b){
    var resta=parseint(a)-parseint(b);
    return 'la resta es: '+ resta; 
}
//solicitar dos numeros al usuario 
var inputusuario1=prompt('Ingrese un numero')
var inputusuario2=prompt('ingrese otro numeor')
//guardamos el resultado en una variable
var resultado= resta(inputusuario1,inputusuario2)

console.log(resultado)
