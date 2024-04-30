// Personaje de TV
let nombre = "Tanjiro";
let anime = "Denom Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Denom Slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13

personaje['edad'] = 16;

delete personaje.anime;

console.log(personaje);