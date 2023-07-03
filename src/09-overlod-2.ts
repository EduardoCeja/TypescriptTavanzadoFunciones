//*****Bases para que la funcion cumpla****

//Se va crear una funcion que si le manda "Eduardo", que es un string el va retornar ese string como un array
//Eduardo => [E,d,u,a,r,d,o] => string  => string[] (Basicamente lo que queremos es ingresar un string y que nos devuelva un array de string)

//Si se envia un Array de string lo copacte y me lo devuelva ya compactdo
//[E,d,u,a,r,d,o] => Eduardo => string[] => string  (Se enviar un array de string y recibo un string ya copactado)

//*****Elaboración de una sobrecarga*****
//Se realiza una funcion con el nombre del metodo parseStr
//Dentro de la funcion se va a encargar de realizar un sobrecarga del typado de las entradas y las salidas

//Se crea una funcion de sobrecarga de cuando se envia un string me retorne un array de string (typado)
export function parseStr(input:string): string[];
//Se crea una funcion de sobrecarga de cuando se envia un array de string me retorne un string (typado)
export function parseStr(input: string[]): string;
//Se crea una funcion de sobrecarga de cuando se envia number me retornara una respuesta boolean (true,false)
export function parseStr(input:number):boolean;

/*
//Creacion de sobrecarga de funcion
//Se definira que es lo que se puede recibir input: string | string[]
//El retorno es igual los valores string | string[]
export function parseStr(input: string | string[]): string | string[]{
  //Validación de si tiene un array retornara un nuevo array
  if(Array.isArray(input)){
    //En el retorno de la validación del array unira los elementos con el método join()
    return input.join('');//string
  }else{
    //En un dado caso que no sea un array, dividira el string ingresado y lo convertira en un array de string utilizando el método split()
    return input.split(''); //string[]
  }
}
*/
//Con esta funcion se define qu es lo que se puede recibir: unknown (La variable o tipo de dato es desconocida )
export function parseStr(input:unknown):unknown {
  //Validación de si tiene un array retornara un nuevo array
  if (Array.isArray(input)){
    //En el retorno de la validación del array unira los elementos con el método join()
    return input.join('');//string
  }else if(typeof input === 'string'){
    //En un dado caso que no sea un array, dividira el string ingresado y lo convertira en un array de string utilizando el método split()
    return input.split('');//Array de string (string[])
  }else if(typeof input === 'number'){
    //En un dado caso que no sea un array o un array de string, validara si es un number, en un dado caso que si sea un number retornara un valor boolean "true"
    return true;//boolean

  }
}
//Ejecución
//Se crea una constante rta para los ejemplos
//La respuesta para que sea un Array de string
//El input que se va enviar es 'Eduardo'
const rtaArray = parseStr('Eduardo')

//como ya cuenta una sobrecarga que el input detecta que es un string y me retornara un array de string
rtaArray.reverse();
//Validación si es un Array
/*if(Array.isArray(rtaArray)){
  //ejecuta el método reverse()
  //invierte el orden de los elementos de un array el primer elemento pasa a ser el último y el último pasa a ser el primero.
  rtaArray.reverse();
}*/
console.log('rtaArray', 'Eduardo =>' ,rtaArray)

//La respuesta para que sea un string
//El input que se va enviar es ['E','d','u','a','r','d','o']
const rtaStr  = parseStr(['E','d','u','a','r','d','o'])

//como ya cuenta una sobrecarga que el input detecta que es un array de string y me retornara un string
rtaStr.toLowerCase();

//Validacion si el tipo de dato es un string
/*if (typeof rtaStr === rtaStr){
  //ejecutar el metodo toLowerCase()
   rtaStr.toLowerCase();
}*/
console.log('rtaStr',"['E','d','u','a','r','d','o']=>",rtaStr)

const rtaBoolean = parseStr(12);
console.log('rtaBoolean','12 =>',rtaBoolean)
