"use strict";
//utilizar la palabra reservada "enum"
//Es aconsejable que los enums sean en MAYUSCULAs
var ROLES;
(function (ROLES) {
    //Cuerpo del enum de un set de conjunto de opciones
    //Definicion de conjunto de roles de una aplicación
    ROLES["ADMIN"] = "admin";
    ROLES["SELLER"] = "seller";
    ROLES["CUSTOMER"] = "customer"; //Cliente
})(ROLES || (ROLES = {}));
//Se crea un constante "eduardoUser" y contendra el tipado de "User" esto quiere decir que debe que tener un username y role
const eduardoUser = {
    username: "Eduardo",
    role: ROLES.ADMIN //Rol que contendra
};
const genedisUse = {
    username: "Genesis",
    role: ROLES.SELLER
};
console.log(eduardoUser);
console.log(genedisUse);
//Esto es una forma mas dircta de saber cuales son las opciones que se le puede asignar a una variable, enotnces se le manda a llamar directamente al ENUM que tiene un conjunto de opciones ya establecidas
