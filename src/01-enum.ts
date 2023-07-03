//utilizar la palabra reservada "enum"
//Es aconsejable que los enums sean en MAYUSCULAs
enum ROLES {
  //Cuerpo del enum de un set de conjunto de opciones
  //Definicion de conjunto de roles de una aplicación
  ADMIN = "admin",//Administrador
  SELLER = "seller",//Vendedor
  CUSTOMER = "customer"//Cliente
}

//Creación de tipo usuario
type User = {
  //Caracteristicas del usuario
  username:string; //username se le asigna el tipo de dato string
  //Defincion de rol
  role:ROLES;//El tipado va ser cuando se asigne un rol tiene que estar dentro de ese conjunto de opciones
}

//Se crea un constante "eduardoUser" y contendra el tipado de "User" esto quiere decir que debe que tener un username y role
const eduardoUser: User = {
  username:"Eduardo", //Asignación de nombre
  role: ROLES.ADMIN //Rol que contendra
};
const genedisUse: User = {
  username:"Genesis",
  role:ROLES.SELLER
}

console.log(eduardoUser);
console.log(genedisUse);
//Esto es una forma mas dircta de saber cuales son las opciones que se le puede asignar a una variable, enotnces se le manda a llamar directamente al ENUM que tiene un conjunto de opciones ya establecidas
