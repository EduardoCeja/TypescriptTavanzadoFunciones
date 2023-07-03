"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProducts = exports.updateProduct = exports.addProduct = exports.products = void 0;
//Importación de la dependencia faker para los atributos omitidos
const faker_1 = require("@faker-js/faker");
//Se crea una constante products que va ser tipada que realmente es un array en el cual solo deben que haber objetos que cumplan con ese tipo dipado "Product"
exports.products = [];
//Se declaran los métodos que hacen manipulación, edición y eliminación
//Metodo para agregar producto
const addProduct = (data) => {
    //Atributos que fueron omitidos
    const newProduct = Object.assign(Object.assign({}, data), { id: faker_1.faker.string.uuid(), createdAt: faker_1.faker.date.recent(), updatedAt: faker_1.faker.date.recent(), category: {
            id: data.categoryId,
            name: faker_1.faker.commerce.department(),
            createdAt: faker_1.faker.date.recent(),
            updatedAt: faker_1.faker.date.recent(),
        } });
    exports.products.push(newProduct);
    return newProduct;
};
exports.addProduct = addProduct;
//Actualización del producto
//Se tiene el metodo, como primer parametro el id que se requiere actualizar y el segundo changes hace referencia que debe que tener el tipado de UpdateProductDto
const updateProduct = (id, changes) => {
    //Buscar el id de ese elemento
    const index = exports.products.findIndex(item => item.id === id);
    //Guarda la informacion en una Data Previa
    const prevData = exports.products[index];
    //Actualización
    exports.products[index] = Object.assign(Object.assign({}, prevData), changes);
    return exports.products[index];
};
exports.updateProduct = updateProduct;
//Metodo para busqueda
//Esta busqueda retornara un array de productos de los que haya encontrado
const findProducts = (dto) => {
    //Modificar el parametro de busqueda
    //dto.color='blue'
    //to.isNew=true
    return exports.products;
};
exports.findProducts = findProducts;
