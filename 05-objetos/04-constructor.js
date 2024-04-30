// { id: 1, recuperarClave: function(){} }

function Usuario() {
    this.id = 1;
    this.recuperarCalve = function() {    // métodos
        console.log('Recuperando clave...');
    }
};

let usuario = new Usuario();

console.log(usuario);