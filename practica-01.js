//Desarrolle una función que reciba una lista de strings, y retorne la cantidad de strings con longitud mayor a 25 caracteres.
//Desarrolle una función que retorne el resultado de una exponenciación dada la base y el exponente sin utilizar el operador respectivo.
//Desarrolle una función que retorne las ocurrencias de un elemento en una lista.
//Desarrolle una función que retorne el elemento n de la serie Fibonacci.
//Desarrolle una función que retorne si una lista tiene duplicados o no.
//Desarrolle una función que retorne el elemento mas repetido de una lista.
//Desarrolle una función que ordene una lista desordenada.

function sortArray(array) {
    return array.slice().sort((a, b) => b - a)
}

console.log(sortArray([6, 1, 7, 3, 9, 5])) //[9,7,6,5,3,1]

//Desarrolle una función que retorne el n-esimo elemento mas grande de una lista.

function nLargestElement(array, n) {
    sortedArray = sortArray(array)
    return sortedArray[n - 1]
}

console.log(nLargestElement([6, 1, 7, 3, 9, 5], 2)); //7

//Desarrolle una función que retorne el producto maximo de dos numeros de una lista.

function maxProduct(array) {
    sortedArray = sortArray(array)
    return Math.max(sortedArray[0] * sortedArray[1])
}

// Ejemplo de uso
const lista = [4, -10, 7, -3, 9];
console.log(maxProduct(lista)); // Salida: 90 (9 * 10)


//Desarrolle una función que realice una busqueda binaria de un elemento (y lo retorne).
