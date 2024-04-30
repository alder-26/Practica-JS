

function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
};

let user1 = crearUsuario('Willy', 'willy@gmail.com');
let user2 = crearUsuario('Paco', 'paco@gmail.com');
let user3 = crearUsuario('Jose', 'jose@gmail.com');

console.log(user1, user2, user3);