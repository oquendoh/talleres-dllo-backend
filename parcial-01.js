const datos = require("./datos.json")

/*
  Para correr este archivo, utilicen el comando
  $ node parcial1.js

  Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

  La variable importada "datos" contiene datos de estudiantes.
*/

/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne la cantidad de estudiantes en matricula condicional
 * (promedio por debajo de 3.3).
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoUno(estudiantes) {
  function promEstudiante(estudiante) {
    let x = estudiante.length
    let prom = 0
    for (let i = 0; i < x; i++) {
      let y = estudiante[i].nota
      prom += y
    }
    return prom /= x
  }
  return estudiantes.filter(estudiante =>promEstudiante(estudiante.cursos) < 3.3).length
}

/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne una lista con el nombre completo de cada estudiante.
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoDos(estudiantes) {
  return estudiantes.map(estudiante =>`${estudiante.nombre} ${estudiante.apellido}`)
}

/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne una lista con los id de cada estudiante unicamente, y tras
 * ser ordenados ascendentemente por altura.
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoTres(estudiantes) {
  return estudiantes.slice().sort((a, b) => a.altura - b.altura).map(estudiante => estudiante._id)
}

/**
 * Implemente una funcion que reciba una lista de numeros y
 * retorne el promedio de la lista.
 */

function puntoCuatro(numeros) {
  let x = numeros.length
  let promedio = 0
  for(let i = 0; i < x; i++) {
    promedio += numeros[i]
  }
  promedio /= x
  return promedio
}

/**
 * Implemente una funcion que reciba una palabra y retorne si
 *  la palabra es palindroma o no.
 */
function puntoCinco(palabra) {
  inv = puntoSeis(palabra)
  return palabra === inv
}

/**
 * Implemente una funcion que reciba una palabra y la invierta.
 */
function puntoSeis(palabra) {
  pal = Array.from(palabra)
  let palInvertida
  palInvertida = pal.reverse()
  palabraInvertida = palInvertida.join('')
  return palabraInvertida
}

/**
 * Implemente una funcion que reciba una lista de objetos cualquiera
 * y un parametro y retorne la lista de objetos ordenada ascendemente
 * segun el valor del parametro.
 */

function puntoSiete(lista, parametro) {
  return lista.slice().sort((a, b) => (a[parametro] > b[parametro] ? 1 : -1))
}

module.exports = {
  puntoUno,
  puntoDos,
  puntoTres,
  puntoCuatro,
  puntoCinco,
  puntoSeis,
  puntoSiete,
};
