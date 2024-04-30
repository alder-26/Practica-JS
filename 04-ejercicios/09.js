/*
Crear algoritmo que devuelva un
array de objetos en base a pares.
*/

let pairs = [
    [1, {name: "Juan"}],
    [2, {name: "Perico"}],
    [3, {name: "Andrés"}],
]

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

console.log(toCollection(pairs));