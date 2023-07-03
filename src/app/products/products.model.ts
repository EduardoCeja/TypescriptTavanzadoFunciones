//Importación de la interface del archivo category.models.ts
import { Category } from "../categories/category.models";
//Importación de la interface 'base.model.ts'
import { BaseModel } from "../base.model";

//Se coloca el export para que se pueda utilizar en otro archivo
//Tipado de tallas
export type sSizes = 'S' | 'M' | 'L' | 'XL';

//Se crea una interface ára un conjunto de atributos de valores
//Con "extends" aplicaremos la herencia de la interface BaseModel
export interface Product extends BaseModel {
  title: string;
  image:string;
  description:string;
  stock: number;
  size?: Sizes;//Argumento opcional
  color:string;
  price:number;
  category:Category;//Se manda a llamar la funcion Category
  isNew:boolean;
  tags:string[];
}



