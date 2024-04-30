/*
Crear algoricto que tome un array de objetos
y devuelva un array de pares.
*/

let array = [
{
    id: 1,
    name: 'Juan',
}, {
    id: 2,
    name: 'Camilo',
}, {
    id: 3,
    name: 'Andrés',
}
]

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array)
console.log(resultado);
