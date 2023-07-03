//Importación de la interface 'base.model.ts'
import { BaseModel } from "../base.model";

//Interface de category, conjunto de atributos de valores
//Con "extends" aplicaremos la herencia de la interface BaseModel
export interface Category extends BaseModel {
  name: string;
}
