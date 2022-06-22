//preguntar al usuario si es bellisimo 
var pregunta=prompt("¿Eres bellisimo?")
if (pregunta=="si"||pregunta=="sí"||pregunta=="SI"||pregunta=="SÍ"){
    alert("Muy cierto, eres encantador@")
}else if (pregunta=="no"||pregunta=="NO"||pregunta=="No"){
    alert("no te creo, piensalo bien")
}else{ 
    alert ("no te entiendo")
}
// preguntar al usuario por un numero y deternminar si es divisible entre dos
let numberUser=prompt("ingrese un numero por favor")
if (numberUser % 2 == 0){
    alert(numberUser + " es divisible entre dos")
}else{
    alert(numberUser + " no es divisible entre dos")
}
