/* funcion para crear una funcion que reciba 
como parametro una  oracion y defina si es palindromo*/
function esPalindromo(oracion){
    var oracionesSinEspacio=[];
    var indice=0;
    for (var i=0;i<oracion.length;i++){
        if (oracion[i]==' '){
            console.log("espacio encontrado en la oracion"+i);
        } else{
            oracionesSinEspacio[indice]=oracion(i).toUppercase();
            indice = indice + 1;
        }
    }
 var indiceAlReves = (OracionesSinEspacio.lengt - 1)
 for(var i=0;i<oracionesSinEspacio.length;i++){
     if(oracionesSinEspacio[i] != oracionesSinEspacio[indiceAlReves]){
         return "La oración no es palindromo";

     }else {
         indiceAlReves=indiceAlReves-1;
     }
 }
 return "La oración es palindromo"
}

var informacionUsuario = prompt("Ingresa la oracion: ");

console.log (esPalindromo(informacionUsuario));
