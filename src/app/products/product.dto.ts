//Se importa el archivo products.model para obtener la interface de "Product"
import { Product } from "./products.model";

//"Omit" omitir las propiedades, campos o llaves que quieramos.
//Esto creara una nueva interface llamado CreateProducDto omitiendo el campo "id", "createdAt", "updatedAt" y "category" de "Product"

//Se crea la interface "CreateProducDto" y se externdera con la palabra extends para poder agregar un atributo en particular que no tiene product "categoryId"
export interface CreateProducDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}
//Creacion de un nuevo tipado con solo ciertas propiedades
type example = Pick<Product, 'color' | 'description'>;


//Se crea la interface "UpdateProductDto" y se extendera con la palabra extends para poder todas las propiedades como opcionales
export interface UpdateProductDto extends Partial<Product>{

}{}

//Es para hacer todas las propiedades Obligatorias
type example2 =Required<Product>;

//Se crea la interface "FindProductDto" y se extendera con la palabra extends para poder que todas las propiedades como opcionales y adicional que tambien solo sean de lectura
export interface FindProductDto extends Readonly<Partial<Product>>{

}
//Es para que todas las propiedades sea de solo lectura
type example3 = Readonly<Product>
