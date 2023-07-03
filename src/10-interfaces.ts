//Tipado de tallas
type Sizes = 'S' | 'M' | 'L' | 'XL';

//Se crea una interface ára un conjunto de atributos de valores
interface Product {
  id: string | number;
  title: string;
  stock: number;
  size: Sizes;
}

//Se crea una constante products que va ser tipada que realmente es un array en el cual solo deben que haber objetos que cumplan con ese tipo dipado "Product"
const products: Product[] = [];

//Se agrega el primer producto con un push
products.push({
  id: '1',
  title: 'product 1',
  stock: 10,
  size:"XL"
});

console.log(products);
