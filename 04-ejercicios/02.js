/*
Nombre : ancho x alto
- 8k -> 7680 x 4320
- 4k -> 3840 x 2160
- WQHD -> 2560 x 1440
- FHD -> 1920 x 1080
- HD -> 1280 x 720
*/

function nombreResolucion(ancho, alto) {
    if (ancho < 1280 || alto < 720) {
        return "Resolución no válida."
    }
    else{
        if (ancho > 7679 && alto > 4319) {
            return "8K";
        }
        else if (ancho > 3839 && alto > 2159) {
            return "4K";
        }
        else if (ancho > 2559 && alto > 1439) {
            return "WQHD";
        }
        else if (ancho > 1919 && alto > 1079) {
            return "FHD";
        }
        else if (ancho > 1279 && alto > 719) {
            return "HD";
        }
    }
}

let nombre = nombreResolucion(3840, 2160)
console.log(nombre);