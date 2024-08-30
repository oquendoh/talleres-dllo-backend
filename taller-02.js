/**
Punto 1: Desarrolle una función llamada findMax que reciba 
una lista de números por parámetro y retorne el mayor valor.
No permitido Math.max que trae Javascript por defecto.
 */

function findMax(lista) {
    let max = lista[0]
    for(let i = 1; i < lista.length; i++) {
      if (lista[i] > max) {
        max = lista[i]
      }
    }
    return max
}

lis = [3, 17, -1, 4, -19]
console.log(findMax(lis)) //17

/**
Punto 2: Desarrolle una función llamada includes que reciba 
una lista de números y un numero por parámetro y retorne 
un booleano representando si el numero se encuentra en la lista.
No permitido includes que trae Javascript por defecto.
*/

function includes(lista, num) {
    let bool = false
    for(let i = 0; i < lista.length; i++) {
      if (lista[i] == num) {
        bool = true
      }
    }
    return bool
}

lis = [3, 17, -1, 4, -19]
console.log(includes(lis,2)) //false
console.log(includes(lis,4)) //true

/**
Punto 3: Desarrolle una función llamada sum que reciba una lista 
de números y retorne la suma de los elementos de la lista.
 */

function sum(lista) {
    let suma = 0
    for(let i = 0; i < lista.length; i++) {
      suma += lista[i]
    }
    return suma
}

lis = [3, 17, -1, 4, -19]
console.log(sum(lis)) //4

/**
Punto 4: Desarrolle una función llamada missingNumbers que reciba 
una lista de números y retorne una lista de los números faltantes 
entre el menor y mayor de la lista.
 */

function missingNumbers(lista) {
    max = findMax(lista)
    min = findMin(lista)
    let faltantes = []
    let j = 0
    for (let i = min; i < max; i++) {
        if (!includes(lista, i)) {
            faltantes[j] = i
            j++
        }
    }
    return faltantes
}

lis = [7, 2, 4, 6, 3, 9]
console.log(missingNumbers(lis)) //[5, 8]

function findMin(lista) {
    let min = lista[0]
    for(let i = 1; i < lista.length; i++) {
      if (lista[i] < min) {
        min = lista[i]
      }
    }
    return min
}