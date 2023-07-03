//Importación de la interface 'base.model.ts'
import { BaseModel } from "../base.model";

//utilizar la palabra reservada "enum"
//Es aconsejable que los enums sean en MAYUSCULAs
export enum ROLES {
  //Cuerpo del enum de un set de conjunto de opciones
  //Definicion de conjunto de roles de una aplicación
  ADMIN = "admin",//Administrador
  SELLER = "seller",//Vendedor
  CUSTOMER = "customer"//Cliente
}


//Creación de tipo usuario
export interface User extends BaseModel  {
  //Caracteristicas del usuario
  username:string; //username se le asigna el tipo de dato string
  //Defincion de rol
  role:ROLES;//El tipado va ser cuando se asigne un rol tiene que estar dentro de ese conjunto de opciones
}
