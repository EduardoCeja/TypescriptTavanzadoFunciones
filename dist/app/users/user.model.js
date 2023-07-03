"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES = void 0;
//utilizar la palabra reservada "enum"
//Es aconsejable que los enums sean en MAYUSCULAs
var ROLES;
(function (ROLES) {
    //Cuerpo del enum de un set de conjunto de opciones
    //Definicion de conjunto de roles de una aplicación
    ROLES["ADMIN"] = "admin";
    ROLES["SELLER"] = "seller";
    ROLES["CUSTOMER"] = "customer"; //Cliente
})(ROLES || (exports.ROLES = ROLES = {}));
