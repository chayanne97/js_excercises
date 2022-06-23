//ejercicio numero uno ciclo while: crea un programa que pida un numero al usuario y muestre solo los multiplos de 5
var numero = parseInt(prompt("Ingrese un número"))
var index=0
console.log(typeof(numero))
while(index <= numero){
    index++;
    if ((index % 5) == 0){
        console.log(index)
    }
}

//Solicitar dos numero entre 1 y 50. imprimir en consola klos numeros y cuando sean los del usuario imprimir "loteria"
alert("Solo ingrese numeros entre 1 y 50")
var numero1=parseInt(prompt('Ingrese primer numero'))
var numero2=parseInt(prompt('Ingrese segundo numero'))

var indice=0
if (numero1 > 50 || numero2 > 50){
alert("No ingresaste valores correctos dentro de 1 y 50")
}else{
    while (indice <= 50){
        if(numero1 == indice || numero2 == indice){
            console.log("Loteria")
        }else{
            console.log(indice)
        }
        indice++;
    }

}

//crea un programa que ´pida numeros y que finalice cuando el usuario ingrese 0
var numero=[];
var userInput;
while(userInput == ""){
    userInput=parseInt(prompt("ingresa solo numeros"))
    if(userInput != 0){
        numero.push(userInput)
    }else{
    alert("Haz introducido todos los numeros")
    }
    alert("los numeros que haz introducido son: ",userInput)
}