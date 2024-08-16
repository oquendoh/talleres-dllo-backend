/**
Punto 1: Desarrolle una función llamada convertidorTemp que reciba una temperatura en centigrados y retorne la temperatura en fahrenheit
 */

function convertidorTemp(tempC) {
    return tempC * 9 / 5 + 32
}

console.log(convertidorTemp(36.5)) //97.7

/**
Punto 2: Desarrolle una función llamada resolvedor que retorne el valor de x de la formula general cuadratica.
La función debe permitir, con el uso de parametros, elegir si se quiere el resultado negativo o positivo.
 */

function resolvedor(a, b, c, signo) {
    if(signo) {
        x = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    } else {
        x = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    }
    return x
}

console.log(resolvedor(1, 5, 4, true)) //-1
console.log(resolvedor(1, 5, 4, false)) //-4

/**
Punto 3: Desarrolle una funcion llamada mejorParidad que, de la mejor manera posible, resuelva y retorne la paridad de un número.
Es decir, que retorne si un numero es par o no, para utilizar en un condicional correctamente.
 */

function mejorParidad(num) {
    return num % 2 === 0
}

console.log(mejorParidad(87)) //false
console.log(mejorParidad(108)) //true

/**
Punto 4: Desarrolle una funcion llamada peorParidad que, de la peor manera posible, resuelva y retorne la paridad de un numero.
Solo es necesario "resolver" hasta el numero 10.
 */

function peorParidad(num) {
    if (num == 1) {
        paridad = false
    } else if (num == 2) {
        paridad = true
    } else if (num == 3) {
        paridad = false
    } else if (num == 4) {
        paridad = true
    } else if (num == 5) {
        paridad = false
    } else if (num == 6) {
        paridad = true
    } else if (num == 7) {
        paridad = false
    } else if (num == 8) {
        paridad = true
    } else if (num == 9) {
        paridad = false
    } else if (num == 10) {
        paridad = true
    }
    return paridad
}

console.log(peorParidad(9)) //false
