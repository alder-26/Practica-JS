/*
Crear array de longitud N, y que sus elementos
sean de 1 hasta N.
*/

function crearArray(n) {
    if (n < 1) {
        return [];
    }
    let arr = [];
    for (i = 0; i < n; i++){
        arr[i] = i + 1; 
    }
    return arr;
}

console.log(crearArray(7));