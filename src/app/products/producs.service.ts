//Importacion del DTO de product.dto.ts
import { CreateProducDto, UpdateProductDto,FindProductDto } from './product.dto';
//Importación del tipado que esta en el archivo products.model.ts
import { Product } from './products.model'
//Importación de la dependencia faker para los atributos omitidos
import { faker } from '@faker-js/faker';

//Se crea una constante products que va ser tipada que realmente es un array en el cual solo deben que haber objetos que cumplan con ese tipo dipado "Product"
export const products: Product[] = [];

//Se declaran los métodos que hacen manipulación, edición y eliminación
//Metodo para agregar producto
export const addProduct = (data: CreateProducDto): Product =>{
  //Atributos que fueron omitidos
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct
}

//Actualización del producto
//Se tiene el metodo, como primer parametro el id que se requiere actualizar y el segundo changes hace referencia que debe que tener el tipado de UpdateProductDto
export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  //Buscar el id de ese elemento
  const index = products.findIndex(item => item.id === id);
  //Guarda la informacion en una Data Previa
  const prevData= products[index];
  //Actualización
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}


//Metodo para busqueda
//Esta busqueda retornara un array de productos de los que haya encontrado
export const findProducts =  (dto:FindProductDto): Product[] =>{
  //Modificar el parametro de busqueda
  //dto.color='blue'
  //to.isNew=true
  return products;
}

