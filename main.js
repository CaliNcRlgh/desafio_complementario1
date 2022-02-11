'use strict'

alert("Calculadora Virtual")

var numero1 = parseInt(prompt("Ingrese el primer numero"))
var numero2 = parseInt(prompt("Ingrese el segundo numero"))
var operacion = prompt("Ingrese la operacion con el signo o nombre de la misma \"sumar\" \"+\"")

operacion.toLowerCase

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Ingrese el primer numero"))
    var numero2 = parseInt(prompt("Ingrese el segundo numero"))
    var operacion = prompt("Ingrese la operacion con el signo o nombre de la misma \"suma\" \"+\"")
    operacion.toLowerCase
}

if(operacion == "sumar" || operacion == "+"){

    var resultado = numero1 + numero2
    alert(resultado)
}else if(operacion == "restar" || operacion == "-"){

    var resultado = numero1 - numero2
    alert(resultado)
}else if(operacion == "multiplicar" || operacion == "*"){

    var resultado = numero1 * numero2
    alert(resultado) 
} else if (operacion == "dividir" || operacion == "/"){

    var resultado = numero1 / numero2
    alert(resultado)
} else {
    alert("No se han introducido datos validos")
}

console.log(resultado) //Verificacion por consola

alert("Lo lograste!")