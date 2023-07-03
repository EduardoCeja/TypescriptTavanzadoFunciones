//Se manda a llamar la dependencia "faker"
import {faker} from '@faker-js/faker'
//Importación del servicio "addProduct" y "products"
import { addProduct, products, updateProduct,findProducts } from "./products/producs.service";


for (let index = 0; index < 50; index++) {
  //Producto a agregar
addProduct({
  description: faker.commerce.productDescription(),//Retonra la descripción del producto
  image:faker.image.url(),//Gener una url de una imagen
  color:faker.color.human(), //Devuelve un string de un color
  size: faker.helpers.arrayElement(['M','XL','S','L']),
  price: parseInt(faker.commerce.price(),10), //devuelve un api de precio
  isNew: faker.datatype.boolean(), //devuelve un boolean
  tags: faker.helpers.arrayElements(['apple', 'banana', 'orange', 'grape', 'kiwi']),
  title: faker.commerce.productName(),// Devuelve un adetivo que descibe un producto
  stock:faker.number.int({min: 10, max: 100}),//Devuelve un number y se le coloca un minimo y un maximo aleatorio
  categoryId: faker.commerce.productDescription(),//Retonra la descripción del producto
})
}

console.log(products);

//Actualización del archivo
const product = products[0];
updateProduct(product.id,{
  title:'New title',
  stock: 80
})

//Parametros de busqueda
findProducts({
  stock:10,
  color:'red'
})

//console.log(findProducts)
