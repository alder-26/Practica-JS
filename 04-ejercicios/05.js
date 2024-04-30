/*
Crear algoritmo que devuelva el número
menor y mayor de un array.
*/

let array = [2, 5, 7, 15, -5, -100, 55]


function menorMayor(arr) {
    let menor;
    let mayor;
    for (numero of array) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }   
    return [menor, mayor];
}

console.log(menorMayor(array));