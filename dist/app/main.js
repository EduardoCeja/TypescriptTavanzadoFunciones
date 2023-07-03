"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Se manda a llamar la dependencia "faker"
const faker_1 = require("@faker-js/faker");
//Importación del servicio "addProduct" y "products"
const producs_service_1 = require("./products/producs.service");
for (let index = 0; index < 50; index++) {
    //Producto a agregar
    (0, producs_service_1.addProduct)({
        description: faker_1.faker.commerce.productDescription(),
        image: faker_1.faker.image.url(),
        color: faker_1.faker.color.human(),
        size: faker_1.faker.helpers.arrayElement(['M', 'XL', 'S', 'L']),
        price: parseInt(faker_1.faker.commerce.price(), 10),
        isNew: faker_1.faker.datatype.boolean(),
        tags: faker_1.faker.helpers.arrayElements(['apple', 'banana', 'orange', 'grape', 'kiwi']),
        title: faker_1.faker.commerce.productName(),
        stock: faker_1.faker.number.int({ min: 10, max: 100 }),
        categoryId: faker_1.faker.commerce.productDescription(), //Retonra la descripción del producto
    });
}
console.log(producs_service_1.products);
//Actualización del archivo
const product = producs_service_1.products[0];
(0, producs_service_1.updateProduct)(product.id, {
    title: 'New title',
    stock: 80
});
//Parametros de busqueda
(0, producs_service_1.findProducts)({
    stock: 10,
    color: 'red'
});
//console.log(findProducts)
