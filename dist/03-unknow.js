"use strict";
//any:  literalmente nos permite almacenar cualquier tipo de dato en una variable
let anyVar;
anyVar = true; //Ok
anyVar = undefined; //Ok
anyVar = null; //Ok
anyVar = 1; //Ok
anyVar = []; //Ok
anyVar = {}; //Ok
//Se crea una variable que esplicitamente con tipado boolean y se le asigna el valor anyVar, esto no marca error por que al final anyVar es cualquier valor que puede entrar dentro del conjunto de booleand
let isNew = anyVar;
//anyVar.doSomething();//Ok
//anyVar.touppercase();//Ok
//Unknown: Permite asignarle a la misma variable diferentes tipos de dato.
let unknowVar;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};
unknowVar = "Lalo";
//No permite hacer ejecucion de algo sin verificar el tipo
// unknowVar.doSomething();
//Validación de tipo
//Si el typo de dato de la variable unknowVar es igual forzosamente a un "String"
if (typeof unknowVar === 'string') {
    //Le responde en letras mayusculas
    unknowVar.toUpperCase();
}
console.log(`Lalo`, unknowVar);
//Si el typo de dato de la variable unknowVar es igual forzosamente a un "Booleand"
if (typeof unknowVar === 'boolean') {
    //Le responde con un true
    let isNewV2 = unknowVar;
}
// evita que la funcion explote debido no darle formato adecuado en este caso en formato JSON
const parse = (str) => {
    return JSON.parse(str);
};
