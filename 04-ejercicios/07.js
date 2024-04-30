/*
Crear algoritmo que devuleva el precio
del producto más los impuestos.
*/

function precioCompleto(precio, impuesto) {
    return precio + precio * impuesto;
}

let resultado = precioCompleto(10, 0.5);
console.log(resultado);