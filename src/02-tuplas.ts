//Creación de array de precios de puros numeros
//Se hace el tipado correcto hciendo mencion que es un array de numbers
const prices: number[] = [1,3,2,2,2]
//Si se quiere hacer un array de number y string el correcto typado se deberia que generar de la siguiente manera
const pricess: (number | string)[] = [1,3,2,2,2,'as']

//Agregar elemento a el array de la constante "pricess"
//pricess.push(1) //Elemento number
//pricess.push("Hola")//Elemento string

//****Definicion de tupla*****

//Creacion de array
//El primer elmento sera "Eduardo" en el siguiente un numero
//Posteriormente se define el tipado fuertemente de la constante, que no pueda incrementar mas valores si literlamente el array es de dos.
//Que se quiere tipar que en la posicion 1 si o si haya un string y que en la posicion 2 si o si haya un number
//La tupla se typa [string,number]
const user:[string,number] = ["Eduardo",1994]
//Impresion de la tupla
console.log(user)//[ 'Eduardo', 1994 ]
//Acceder a cada elemento de la tupla utilizando una destructuración
const [nameH,age] = user;
//Impresion del primer elemento
console.log(nameH);//Eduardo
//Impresion del segundo elemento
console.log(age);//1994


