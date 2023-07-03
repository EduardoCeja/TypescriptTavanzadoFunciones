"use strict";
//*****Bases para que la funcion cumpla****
//Se va crear una funcion que si le manda "Eduardo", que es un string el va retornar ese string como un array
//Eduardo => [E,d,u,a,r,d,o] => string  => string[] (Basicamente lo que queremos es ingresar un string y que nos devuelva un array de string)
//Si se envia un Array de string lo copacte y me lo devuelva ya compactdo
//[E,d,u,a,r,d,o] => Eduardo => string[] => string  (Se enviar un array de string y recibo un string ya copactado)
//Creacion de sobrecarga de funcion
//Se definira que es lo que se puede recibir input: string | string[]
//El retorno es igual los valores string | string[]
function parseStr(input) {
    //Validación de si tiene un array retornara un nuevo array
    if (Array.isArray(input)) {
        //En el retorno de la validación del array unira los elementos con el método join()
        return input.join(''); //string
    }
    else {
        //En un dado caso que no sea un array, dividira el string ingresado y lo convertira en un array de string utilizando el método split()
        return input.split(''); //string[]
    }
}
//Ejecución
//Se crea una constante rta para los ejemplos
//La respuesta para que sea un Array de string
//El input que se va enviar es 'Eduardo'
const rtaArray = parseStr('Eduardo');
//Validación si es un Array
if (Array.isArray(rtaArray)) {
    //ejecuta el método reverse()
    //invierte el orden de los elementos de un array el primer elemento pasa a ser el último y el último pasa a ser el primero.
    rtaArray.reverse();
}
console.log('rtaArray', 'Eduardo =>', rtaArray);
//La respuesta para que sea un string
//El input que se va enviar es ['E','d','u','a','r','d','o']
const rtaStr = parseStr(['E', 'd', 'u', 'a', 'r', 'd', 'o']);
//Validacion si el tipo de dato es un string
if (typeof rtaStr === rtaStr) {
    //ejecutar el metodo toLowerCase()
    rtaStr.toLowerCase();
}
console.log('rtaStr', "['E','d','u','a','r','d','o']=>", rtaStr);
