//Impotacion del archivo "Product.model" para utilizar la funcion "Product"
import { Product } from "../products/products.model";
//Impotacion del archivo "user.model" para utilizar la funcion "User"
import { User } from "../users/user.model";
//Importación de la interface 'base.model.ts'
import { BaseModel } from "../base.model";


//Tipado para las Ordenes
export interface Order extends BaseModel{
  products: Product[];//Llamado de la funcion "Product" del archivo "products.model"
  user:User;//Llamado de la funcion "User" del archivo "user.model"
}
