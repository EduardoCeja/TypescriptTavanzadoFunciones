"use strict";
//Never type: Se utiliza para funciones que sabes que nunca van a terminar
//Se crea una constante llamada withoutEnd que es una funcion anonima
const withoutEnd = () => {
    //Se crea un siclo infiinito
    while (true) {
        //Y va imprimir lo siguiente
        console.log('nunca para de aprender');
    }
};
//Se crea una funcion que lance un error y por ende termine la aplicación
//La funcion tendra un typado string
const fail = (message) => {
    //Se coloca throw para lanzar la excepcion
    throw new Error(message);
};
//Se crea una funcion anonima que tendra un tipado unknown (Se desconoce el tipo de dato)
const example = (input) => {
    //Validación si es un string
    if (typeof input === 'string') {
        return 'es un string';
        //Validacion si es un Array
    }
    else if (Array.isArray(input)) {
        return 'es un array';
    }
    return fail('not match');
};
console.log(example('Hola'));
console.log(example([1, 1, 1, 1]));
console.log(example(1212)); // detiene
console.log(example('Hola despues del fail'));
console.log(example('Hola despues del fail'));
console.log(example('Hola despues del fail'));
