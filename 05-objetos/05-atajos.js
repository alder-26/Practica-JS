let obj = {};
let obj2 = new Object();

/**
Nez Array(); []
new String(); "" '' ``
new Number(); 12
new Boolean(); true false
*/

function UsuariO() {
    this.name = "Willy Rex";
};
let user = new UsuariO();
console.log(user.constructor);