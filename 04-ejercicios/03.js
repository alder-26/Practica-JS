/*
Indice validar que no sea < 0 y que el elemento
exista en el array
*/

function getbyIndex(arr, idx) {
    if (idx < 0 || arr.length <= idx ) {
        return "No válido.";
    }
    
    return arr[idx];
}

let resultado = getbyIndex([1,2], 0)
console.log(resultado);