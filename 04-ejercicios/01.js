function cualEsMayor(a, b) {
    if (a > b) {
        return a;
    }
    else if (a < b){
        return b;
    }
    else {
        return 'Son iguales';
    }
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);
