/**
Punto 1: Desarrolle una función llamada desglosarString que reciba una string, 
y la string "vocales" o "consonantes", y retorne la cantidad de vocales o consonantes de la string recibida.
*/

function desglosarString(string, tipo) {
    let str = string.split("")  
    let cant = 0
      for (let i = 0; i < str.length; i++) {
          if (tipo === "vocales" && (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")) {
              cant++;
          } else if (tipo === "consonantes" && (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u")) {
              cant++;
          }
      }
  
      return cant;
}

console.log(desglosarString("murcielagos", "vocales")) //5
console.log(desglosarString("murcielagos", "consonantes")) //6

/**
Punto 2: Desarrolle una función llamada twoSum que reciba una lista de numeros enteros 
y otro numero entero y retorne los indices de los numeros del arreglo que sumados sean el otro numero.
No se permite utilizar el mismo numero dos veces.
*/

function twoSum(lista, num) {
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] + lista[j] == num) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)) //[0, 1]
console.log(twoSum([3, 4, 2], 6)) //[1, 2]

/**
Punto 3: Desarrolle una función llamada conversionRomana que reciba una string de cifras romanas y retorne el equivalente en cifras arábigas.
*/

function conversionRomana(numR) {
    let conversion = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    let num = 0
    for (let i = 0; i < numR.length; i++) {
        let actual = conversion[numR[i]];
        let siguiente = conversion[numR[i + 1]];
        if (siguiente && actual < siguiente) {
            num -= actual;
        } else {
            num += actual;
        }  
    }
    return num
}

console.log(conversionRomana("III")) //3
console.log(conversionRomana("XIV")) //14
console.log(conversionRomana("MMXXIV")) //2024
console.log(conversionRomana("MXMVII")) //1997